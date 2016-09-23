/**
 * Created by Christophe on 22/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {

        console: {
            prefix: "graphlink",
            commands: {

            }
        },
        "GraphLink": function(model, modelManager, gameManager) {
            _.extend(this, EventDispatcher);

            var destNode;
            var trigger;

            this.initialize = function() {

                var destNodeUid = model.get("destnode");
                destNode = gameManager.getObjectByUid(destNodeUid);

                var triggerUid = model.get("trigger");
                trigger = gameManager.getObjectByUid(triggerUid);
            };
        }
    }
});