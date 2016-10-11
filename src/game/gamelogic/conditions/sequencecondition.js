/**
 * Created by Christophe on 10/10/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.sequence = this.getObjectById("sequence");
            this.operator = this.getModelProperty("operator");
            this.conditionType = this.getModelProperty("conditiontype");
        },
        eval: function() {

            switch (this.conditionType) {

                case "onstate":
                    var targetState = this.getObjectById("state");
                    return this.complexEval(this.sequence.getstate(), this.operator, targetState);
                    break;

                default:
                    console.log("Type de condition non géré : " + this.conditionType);
            }
        }
    }
});