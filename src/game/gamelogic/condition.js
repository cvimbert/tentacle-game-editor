/**
 * Created by Christophe on 16/09/2016.
 */
define([
    "underscore",
    "conditions/basecondition"
], function(
    _,
    BaseCondition
) {

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
            var conditionObject;

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
                conditionType = model.get("conditionobject");

                conditionObject = new BaseCondition(model, modelManager, gameManager);

                require(["conditions/" + conditionType], function(conditionExtension) {
                    _.extend(conditionObject, conditionExtension);

                    if (conditionObject.initialize) {
                        conditionObject.initialize();
                    }
                }, function() {
                    console.log("Erreur de chargement de condition : " + conditionType);
                });
            };

            this.eval = function() {

                return conditionObject.eval();

                var expression;

                switch (conditionType) {

                    case "comparevariablewithvalue":

                        return variableValueComparaison(model.get("variable"), model.get("value"), model.get("operator"));

                        break;

                    case "comparevariablewithvariable":

                        break;

                    default:
                        return true;
                }
            };
        }
    }
});