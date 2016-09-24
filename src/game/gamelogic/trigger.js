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
            var activatedOnStart = false;
            var enabled = false;

            var bindings;

            this.initialize = function() {

                var actionUid = model.get("action");
                action = gameManager.getObjectByUid(actionUid);

                var conditionUid = model.get("condition");
                condition = gameManager.getObjectByUid(conditionUid);

                triggerType = model.get("triggertype");

                activatedOnStart = (model.get("activatedonstart") === "true");

                bindings = {};
            };

            this.isActivatedOnStart = function() {
                return activatedOnStart;
            };

            this.bind = function(sourceUid, callback) {
                bindings[sourceUid] = callback;
            };

            this.unbind = function(sourceUid) {
                delete bindings[sourceUid];
            };

            this.enable = function() {
                require(["triggers/" + triggerType], function(triggerExtension) {

                    triggerObject = new BaseTrigger(model, gameManager, action, condition, bindings);
                    _.extend(triggerObject, triggerExtension);

                    triggerObject.initialize();
                    triggerObject.on();
                });

                enabled = true;
            };

            this.disable = function() {
                triggerObject.off();
                enabled = false;
            };
        }
    }
});