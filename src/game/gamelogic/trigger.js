/**
 * Created by Christophe on 20/09/2016.
 */
define([
    "underscore",
    "triggers/basetrigger"
], function(
    _,
    BaseTrigger
) {

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
            var triggerObject;

            this.initialize = function() {

                var actionUid = model.get("action");
                action = gameManager.getObjectByUid(actionUid);

                var conditionUid = model.get("condition");
                condition = gameManager.getObjectByUid(conditionUid);

                triggerType = model.get("triggertype");
            };

            this.enable = function() {
                require(["triggers/" + triggerType], function(triggerExtension) {

                    triggerObject = new BaseTrigger(model, gameManager, action, condition);
                    _.extend(triggerObject, triggerExtension);

                    triggerObject.initialize();
                    triggerObject.on();
                });
            };

            this.disable = function() {
                triggerObject.off();
            };
        }
    }
});