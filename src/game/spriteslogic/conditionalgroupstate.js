/**
 * Created by Christophe on 19/09/2016.
 */
define([], function() {

    return {
        console: {
            // pas utile ici, voir pour le supprimer
            prefix: "conditionalgroupstate",
            commands: {

            }
        },
        "ConditionalGroupState": function(model, modelManager, gameManager) {

            this.state = null;
            this.condition = null;

            this.initialize = function() {
                var stateUid = model.get("state");
                this.state = gameManager.getObjectByUid(stateUid);

                var conditionUid = model.get("condition");
                this.condition = gameManager.getObjectByUid(conditionUid);
            };
        }
    }
});