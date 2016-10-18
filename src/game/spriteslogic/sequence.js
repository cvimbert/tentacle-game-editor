/**
 * Created by Christophe on 15/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {
        console: {
            prefix: "sequence",
            commands: {
                index: function(sequence, args) {
                    var index = parseInt(args[0]);
                    var success = sequence.displayAtIndex(index);
                    // si false, message de console
                },
                next: function(sequence) {
                    sequence.displayNext();
                },
                previous: function(sequence) {
                    sequence.displayPrevious();
                },
                play: function(sequence, args) {
                    var delay = args ? parseFloat(args[0]) : 1;
                    sequence.play(delay);
                },
                reset: function(sequence) {
                    sequence.reset();
                }
            }
        },
        "Sequence": function(model, modelManager, gameManager) {
            _.extend(this, EventDispatcher);

            var group;
            var groupStates;
            var loopType;
            var initIndex = 0;
            var currentIndex = 0;
            var animationInterval;
            var direction;
            var isPlaying;
            var self = this;

            this.initialize = function() {

                direction = 1;

                isPlaying = false;

                var groupUid = model.get("spritesgroup");
                var statesUidCollection = model.get("states");

                loopType = model.get("looptype");

                group = gameManager.getObjectByUid(groupUid);
                groupStates = [];

                _.each(statesUidCollection, function(stateUid) {
                    groupStates.push(gameManager.getObjectByUid(stateUid));
                });
            };

            this.reverse = function() {
                direction *= -1;
            };

            function isValidIndex(index) {
                return index >= 0 && index < groupStates.length;
            }

            this.reset = function() {
                console.log("reset");

                if (animationInterval !== undefined) {
                    clearInterval(animationInterval);
                    animationInterval = undefined;
                }

                if (currentIndex !== -1) {
                    groupStates[currentIndex].hide();
                }

                currentIndex = -1;
                isPlaying = false;
            };

            this.hide = function() {

                _.each(groupStates, function(state) {
                    state.hide();
                });
            };

            this.displayAtIndex = function(index) {

                if (!isValidIndex(index)) return false;

                this.hide();

                currentIndex = index;
                groupStates[index].display();

                this.dispatchEvent("enterstate", groupStates[index]);

                return true;
            };

            this.displayNext = function() {
                var ok = this.displayAtIndex(currentIndex + direction);

                if (!ok && loopType === "circle") {
                    this.reverse();
                    ok = this.displayNext();
                }

                return ok;
            };

            this.next = this.displayNext;

            this.displayPrevious = function() {
                var ok = this.displayAtIndex(currentIndex - direction);

                if (!ok && loopType === "circle") {
                    this.reverse();
                    ok = this.displayPrevious();
                }

                return ok;
            };

            this.previous = this.displayPrevious;

            this.play = function(delay, occurences, interruptable) {

                if (occurences === undefined) occurences = 1;

                if (interruptable === "false" && isPlaying) {
                    occurencesCounter = 0;
                    return;
                }

                self.reset();

                if (delay === undefined) delay = 1;

                self.displayNext();

                var occurencesCounter = 0;

                isPlaying = true;

                // attention, il semblerait que animationInterval ne soit pas défini avant la première itération

                animationInterval = setInterval(function() {

                    if (isPlaying === false) return;

                    if (!self.displayNext()) {
                        self.dispatchEvent("iterationend", occurencesCounter);
                        occurencesCounter++;

                        if (occurencesCounter >= occurences) {

                            clearInterval(animationInterval);

                            self.dispatchEvent("animationend");
                            isPlaying = false;
                        }
                        else {
                            currentIndex = -1;
                            self.displayNext();
                        }

                    }

                }, delay * 1000);
            };

            this.resetIndex = function() {
                currentIndex = -1;
            };

            this.updatecurrentstate = function() {

            };

            this.setstate = function(state) {
                var index = groupStates.indexOf(state);
                this.displayAtIndex(index);
            };

            this.getstate = function() {
                return currentIndex !== -1 ? groupStates[currentIndex] : null;
            };
        }
    }
});