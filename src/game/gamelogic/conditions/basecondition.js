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
            } else {
                return operand;
            }
        };

        function getValueFromComplexOperand(operand) {

            var object;
            var command;

            if (operand["object"] !== undefined) {
                command = operand["command"];
                return operand["object"][command]();
            } else if (operand["uid"] !== undefined) {
                object = gameManager.getObjectByUid(operand["uid"]);
                return object["command"];
            } else if (operand["id"]) {
                object = this.getObjectById(operand["id"]);
                return object["command"];
            }
            else {
                return operand;
            }
        }

        this.complexEval = function(operand1, operator, operand2) {

            operand1 = getValueFromComplexOperand(operand1);
            operand2 = getValueFromComplexOperand(operand2);

            return this.evalExpression(operand1, operator, operand2);
        };

        this.evalExpression = function(operand1, operator, operand2) {

            // cas des égalités d'objets
            var bf = {};

            if ((typeof operand1) === "object") {
                operand1 = "operand1";
            } else {
                operand1 = this.addQuotesToOperandIfString(operand1);
            }


            if ((typeof operand2) === "object") {
                operand2 = "operand2"
            } else {
                operand2 = this.addQuotesToOperandIfString(operand2);
            }

            console.log(operand1 + operator + operand2);
            return eval(operand1 + operator + operand2);
        };
    };
});