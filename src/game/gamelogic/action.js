/**
 * Created by Christophe on 20/09/2016.
 */
define([
    "underscore",
    "actions/baseaction"
], function(
    _,
    BaseAction
) {

    return {
        console: {
            prefix: "action",
            commands: {

            }
        },
        "Action": function(model, modelManager, gameManager) {

            var condition;
            var actionType;
            var actionObject;

            this.initialize = function() {

                var conditionUid = model.get("condition");
                condition = gameManager.getObjectByUid(conditionUid);

                actionType = model.get("actiontype");

                actionObject = new BaseAction(model, modelManager, gameManager);

                require(["actions/" + actionType], function(ActionExtension) {
                    _.extend(actionObject, ActionExtension);

                    actionObject.gameManager = gameManager;

                    if (actionObject.initialize)
                        actionObject.initialize();

                }, function() {
                    console.log("erreur de chargement d'action : " + actionType);
                });
            };

            this.execute = function() {

                if (condition) {
                    if (!condition.eval()) return false;
                }

                if (actionObject.launch)
                    actionObject.launch();
            };
        }
    }
});