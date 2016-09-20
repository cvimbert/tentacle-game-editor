/**
 * Created by Christophe on 15/09/2016.
 */
define(["underscore"], function(_) {

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

            var group;
            var groupStates;
            var loopType;
            var initIndex = -1;
            var currentIndex = -1;
            var animationInterval;

            this.initialize = function() {

                var groupUid = model.get("spritesgroup");
                var statesUidCollection = model.get("states");

                loopType = model.get("looptype");

                group = gameManager.getObjectByUid(groupUid);
                groupStates = [];

                _.each(statesUidCollection, function(stateUid) {
                    groupStates.push(gameManager.getObjectByUid(stateUid));
                });

            };

            function isValidIndex(index) {
                return index >= 0 && index < groupStates.length;
            }

            this.reset = function() {
                group.hide();
                currentIndex = -1;

                if (animationInterval) {
                    clearInterval(animationInterval);
                    animationInterval = null;
                }
            };

            this.displayAtIndex = function(index) {

                if (!isValidIndex(index)) return false;

                currentIndex = index;
                groupStates[index].display();
                return true;
            };

            this.displayNext = function() {
                return this.displayAtIndex(currentIndex + 1);
            };

            this.displayPrevious = function() {
                return this.displayAtIndex(currentIndex - 1);
            };

            this.play = function(delay) {

                var t = this;
                t.reset();

                if (delay === undefined) delay = 1;

                t.displayNext();

                var interv = setInterval(function() {

                    if (!t.displayNext()) {
                        clearInterval(interv);
                    }

                }, delay * 1000);
            }
        }
    }
});