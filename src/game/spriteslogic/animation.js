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


            this.initialize = function() {

                var sequenceUid = model.get("sequence");
                sequence = gameManager.getObjectByUid(sequenceUid);

                iterations = model.get("iterations");
                period = model.get("period");
                interruptable = model.get("interruptable");
            }
        }
    }

});