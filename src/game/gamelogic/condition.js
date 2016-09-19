/**
 * Created by Christophe on 16/09/2016.
 */
define([], function() {

    return {
        console: {
            prefix: "condition",
            commands: {
                eval: function(variable) {
                    return variable.eval().toString();
                }
            }
        },
        "Condition": function(model, modelManager, gameManager) {

            var conditionType;

            function comparaisonEval(value1, value2, operand) {
                return eval(value1 + operand + value2);
            }

            function variableValueComparaison(variableUid, value, operand) {
                var varObject = gameManager.getObjectByUid(variableUid);
                return comparaisonEval(varObject.get(), value, operand);
            }

            function variableVariableComparaison(variableUid1, variableUid2, operand) {

            }

            this.initialize = function() {
                conditionType = model.get("conditiontype");
            };

            this.eval = function() {

                var expression;

                switch (conditionType) {

                    case "comparevariablewithvalue":

                        return variableValueComparaison(model.get("variable"), model.get("value"), model.get("operator"));

                        break;

                    case "comparevariablewithvariable":

                        break;
                }
            };
        }
    }
});