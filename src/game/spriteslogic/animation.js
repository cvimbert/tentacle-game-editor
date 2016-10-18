/**
 * Created by Christophe on 17/10/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {
        console: {
            prefix: "animation",
            commands: {

            }
        },
        "Animation": function (model, modelManager, gameManager) {
            _.extend(this, EventDispatcher);

            var sequence;
            var iterations;
            var period;
            var interruptable;

            var isPlaying = false;
            var animationInterval;
            var self = this;

            this.initialize = function() {
                sequence = gameManager.getObjectByUid(model.get("sequence"));
                iterations = model.get("iterations");
                period = model.get("period");
                interruptable = model.get("interruptable");
            };

            this.play = function() {
                if (interruptable === "false" && isPlaying) {
                    occurencesCounter = 0;
                    return;
                }

                sequence.reset();
                sequence.displayNext();

                var occurencesCounter = 0;

                isPlaying = true;

                // attention, il semblerait que animationInterval ne soit pas défini avant la première itération

                animationInterval = setInterval(function() {

                    if (isPlaying === false) return;

                    if (!sequence.displayNext()) {
                        self.dispatchEvent("iterationend", occurencesCounter);
                        occurencesCounter++;

                        if (occurencesCounter >= iterations) {

                            clearInterval(animationInterval);

                            self.dispatchEvent("animationend");
                            isPlaying = false;
                        }
                        else {
                            // on repart à zéro
                            sequence.resetIndex();
                            sequence.displayNext();
                        }
                    }

                }, period * 1000);
            };

            this.stop = function() {

            };

            this.reset = function() {
                sequence.reset();

                if (animationInterval !== undefined) {
                    clearInterval(animationInterval);
                    animationInterval = undefined;
                }
            };
        }
    }

});