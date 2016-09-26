/**
 * Created by Christophe on 20/09/2016.
 */
define(["randomgenerator"], function(RandomGenerator) {

    return {
        console: {
            prefix: "action",
            commands: {

            }
        },
        "Action": function(model, modelManager, gameManager) {

            var condition;
            var actionType;

            this.initialize = function() {

                var conditionUid = model.get("condition");
                condition = gameManager.getObjectByUid(conditionUid);

                actionType = model.get("actiontype");
            };

            this.execute = function() {

                if (condition) {
                    if (!condition.eval()) return false;
                }

                switch (actionType) {

                    case "displaysprite":
                        gameManager.getObjectByUid(model.get("sprite")).show();
                        break;

                    case "hidesprite":
                        gameManager.getObjectByUid(model.get("sprite")).hide();
                        break;

                    case "showgroup":
                        gameManager.getObjectByUid(model.get("group")).show();
                        break;

                    case "hidegroup":
                        gameManager.getObjectByUid(model.get("group")).hide();
                        break;

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

                        break;
                }
            };
        }
    }
});