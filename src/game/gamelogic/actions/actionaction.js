/**
 * Created by Christophe on 18/10/2016.
 */
define(["underscore", "randomgenerator"], function(_, RandomGenerator) {

    return {
        initialize: function() {
            this.actionType = this.getModelProperty("actaction");
            var actionsUids = this.getModelProperty("actions");
            this.actions = [];
            var t = this;

            _.each(actionsUids, function(uid) {
                t.actions.push(t.getObjectByUid(uid));
            });

            if (this.actionType === "randomaction") {
                this.randomGenerator = new RandomGenerator(this.getModelProperty("randmode"), actionsUids);
            } else if (this.actionType === "conditional") {
                this.condition = this.getObjectById("condition");
            }
        },
        launch: function() {
            var t = this;

            function executeActions() {
                _.each(t.actions, function(action) {
                    action.execute();
                });
            }

            function executeAction(uid) {
                this.getObjectByUid(uid).execute();
            }

            switch (this.actionType) {

                case "launchall":
                    executeActions();
                    break;

                case "randomaction":
                    var actionUid = this.randomGenerator.getRandObject();
                    executeAction(actionUid);
                    break;

                case "conditional":
                    if (this.condition.eval()) {
                        executeActions();
                    }
                    break;

                case "temporized":
                    // TODO: attention: pas de possibilité de casser l'action
                    setTimeout(function() {
                        executeActions();
                    }, t.getModelProperty("delay") * 1000);
                    break;

                case "repeat":
                    var count = this.getModelProperty("count");
                    var currentCount = 0;

                    // TODO: lancer une première itération

                    var interv = setInterval(function() {
                        executeActions();
                        currentCount++;

                        if (currentCount >= count) {
                            clearInterval(interv);
                        }
                    }, t.getModelProperty("delay") * 1000);
                    break;

                case "actionssequence":
                    var current = 0;

                    // TODO: lancer une première itération

                    interv = setInterval(function() {
                        t.actions[current].execute();
                        current++;

                        if (current >= t.actions.length) {
                            clearInterval(interv);
                        }

                    }, t.getModelProperty("delay") * 1000);
                    break;
            }
        }
    }
});