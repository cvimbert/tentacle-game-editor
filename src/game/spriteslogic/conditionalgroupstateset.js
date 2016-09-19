/**
 * Created by Christophe on 19/09/2016.
 */
define(["underscore"], function(_) {

    return {
        console: {
            prefix: "cgsstate",
            commands: {

            }
        },
        "ConditionalGroupStateSet": function(model, modelManager, gameManager) {

            var group;
            var conditionalStates;
            var defaultState;

            this.initialize = function() {

                var groupUid = model.get("group");
                group = gameManager.getObjectByUid(groupUid);

                conditionalStates = [];
                var conditionalStatesUids = model.get("conditionalstates");

                _.each(conditionalStatesUids, function(conditionalStateUid) {
                    conditionalStates.push(gameManager.getObjectByUid(conditionalStateUid));
                });

                var defaultStateUid = model.get("defaultstate");
                defaultState = gameManager.get(defaultStateUid);
            };

            this.display = function() {

                var cstate;

                for (var i = 0; i < conditionalStates.length; i++) {
                    cstate = conditionalStates[i];

                    if (cstate.condition.eval()) {
                        cstate.state.display();
                        return;
                    }
                }

                defaultState.display();
            }
        }
    }
});