/**
 * Created by Christophe on 27/09/2016.
 */
define(["underscore", "randomgenerator"], function(_, RandomGenerator) {

    return {
        initialize: function() {
            var actionsUids = this.getModelProperty("actions");
            this.randomGenerator = new RandomGenerator(this.getModelProperty("randmode"), actionsUids);
        },
        launch: function() {
            var actionUid = this.randomGenerator.getRandObject();
            this.getObjectByUid(actionUid).execute();
        }
    }
});