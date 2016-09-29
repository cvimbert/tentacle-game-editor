/**
 * Created by Christophe on 29/09/2016.
 */
define(["variable"], function(Variable) {

    return function (model, modelManager, gameManager) {

        this.getObjectById = function(id) {
            var uid = model.get(id);
            return gameManager.getObjectByUid(uid);
        };

        this.getModelProperty = function(id) {
            return model.get(id);
        };

        this.addQuotesToOperandIfString = function(operand) {
            if ((typeof operand) === "string") {
                return "'" + operand + "'";
            }
        };

        function getValueFromComplexOperand(operand) {
            if (operand instanceof Variable.Variable) {
                return operand.get();
            } else if ((typeof operand) === "object") {
                // sans argments pour le moment
                return operand["object"]["command"]();
            } else {
                return operand;
            }
        }

        this.complexEval = function(operand1, operator, operand2) {

            operand1 = getValueFromComplexOperand(operand1);
            operand2 = getValueFromComplexOperand(operand2);

            return this.evalExpression(operand1, operator, operand2);
        };

        this.evalExpression = function(operand1, operator, operand2) {

            operand1 = addQuotesToOperandIfString(operand1);
            operand2 = addQuotesToOperandIfString(operand2);

            return eval(operand1 + operator + operand2);
        };
    };
});