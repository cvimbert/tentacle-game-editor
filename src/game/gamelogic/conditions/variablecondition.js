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
                    var variableValue = this.getModelProperty("value");
                    return this.complexEval(this.variable.get(), this.operator, variableValue);
                    break;

                case "variablecomparison":
                    var operandVar = this.getObjectById("operandvariable");
                    return this.complexEval(this.variable.get(), this.operator, operandVar.get());
                    break;

                default:
                    console.log("Type de condition de variable inconnu : " + this.conditionType);
            }
        }
    }
});