/**
 * Created by Christophe on 27/09/2016.
 */
define(["underscore"], function(_) {

    return function (model, modelManager, gameManager) {

        var self = this;

        this.getObjectById = function(id) {
            var uid = model.get(id);
            return gameManager.getObjectByUid(uid);
        };

        this.getModelProperty = function(id) {
            return model.get(id);
        };

        function launchEval(object, functionName, args) {

            // TODO: fonctionne pour les chaines de caractère et les objets

            var expression = "object." + functionName + "(";
            var argsArray = [];
            var count = 0;

            if (args.length > 0) {

                _.each(args, function(arg, i) {

                    if (arg.object !== undefined) {
                        argsArray[count] = self.getObjectById(arg.object);
                        expression += "argsArray[" + count + "]";
                        count++;
                    } else {
                        var argValue = model.get(arg);

                        if ((typeof argValue) === "string") {
                            expression += "'" + argValue + "'";
                        } else {
                            expression += argValue;
                        }
                    }

                    if (i < args.length - 1) expression += ",";
                });
            }

            expression += ")";
            eval(expression);
        }

        this.launchCommand = function(object, functionName, args) {
            launchEval(object, functionName, args);
        };

        this.launchObjectCommand = function(objectId, commandName, args) {
            var object = this.getObjectById(objectId);
            var command = model.get(commandName);

            var argsValues = [];

            if (args !== undefined) {

                if (args[command]) {
                    args = args[command];
                }

                if (_.isArray(args)) {
                    _.each(args, function(arg) {
                        argsValues.push(arg);
                    });
                } else {
                    argsValues.push(args);
                }
            }

            this.launchCommand(object, command, argsValues);
        };

        this.getObjectByUid = gameManager.getObjectByUid;
    };
});