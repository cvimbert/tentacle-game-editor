/**
 * Created by Christophe on 20/09/2016.
 */
define([], function() {

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
                }
            };
        }
    }
});