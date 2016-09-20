/**
 * Created by Christophe on 20/09/2016.
 */
define([], function() {

    return {
        console: {
            prefix: "trigger",
            commands: {

            }
        },
        "Trigger": function(model, modelManager, gameManager) {

            var action;
            var condition;
            var triggerType;

            this.initialize = function() {

                var actionUid = model.get("action");
                action = gameManager.getObjectByUid(actionUid);

                var conditionUid = model.get("condition");
                condition = gameManager.getObjectByUid(conditionUid);

                triggerType = model.get("triggertype");
            };

            this.enable = function() {

                switch (triggerType) {

                    case "controlclick":
                        var controlUid = model.get("control");
                        var control = gameManager.getObjectByUid(controlUid);
                        break;
                }
            }

        }
    }
});