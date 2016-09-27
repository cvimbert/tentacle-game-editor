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

                return;

                switch (actionType) {

                    case "nextinsequence":
                        gameManager.getObjectByUid(model.get("sequence")).displayNext();
                        break;

                    case "previousinsequence":
                        gameManager.getObjectByUid(model.get("sequence")).displayPrevious();
                        break;

                    case "triggeraction":
                        var trigger = gameManager.getObjectByUid(model.get("trigger"));
                        var triggerAction = model.get("triggeraction");

                        if (triggerAction === "enable") {
                            trigger.enable();
                        } else if (triggerAction === "disable") {
                            trigger.disable();
                        }

                        break;

                    case "actionsset":
                        var actionsUids = model.get("actions");

                        _.each(actionsUids, function(uid) {
                            gameManager.getObjectByUid(uid).execute();
                        });

                        break;

                    case "clockaction":
                        var clock = gameManager.getObjectByUid(model.get("clock"));
                        var clockAction = model.get("clockaction");

                        if (clockAction === "start") {
                            clock.start();
                        } else if (clockAction === "stop") {
                            clock.stop();
                        }

                        break;

                    case "randomaction":
                        var actionsUids = model.get("actions");

                        _.each(actionsUids, function(uid) {
                            gameManager.getObjectByUid(uid).execute();
                        });



                        break;
                }
            };
        }
    }
});