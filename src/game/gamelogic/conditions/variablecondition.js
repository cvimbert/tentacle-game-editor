/**
 * Created by Christophe on 29/09/2016.
 */
define([], function() {

    return {
        initialize: function() {
            this.variable = this.getObjectById("variable");
            this.operator = this.getModelProperty("operator");
            this.conditionType = this.getModelProperty("conditiontype");
        },
        eval: function() {

            switch (this.conditionType) {

                case "valuecomparison":
                    var variableValue = this.getModelProperty("variablevalue");
                    return this.evalExpression(variableValue, this.operator, this.variable.get());
                    break;

                case "variablecomparison":

                    break;

                default:
                    console.log("Type de condition de variable inconnu : " + this.conditionType);
            }
        }
    }
});