/**
 * Created by Christophe on 27/09/2016.
 */
define(["underscore"], function(_) {

    return function (model, modelManager, gameManager) {

        this.getObjectById = function(id) {
            var uid = model.get(id);
            return gameManager.getObjectByUid(uid);
        };

        this.getModelProperty = function(id) {
            return model.get(id);
        };

        function launchEval(object, functionName, args) {

            // TODO: ne fonctionne pour l'instant que pour les chaines de cararactères

            var expression = "object." + functionName + "(";

            if (args.length > 0) {
                _.each(args, function(arg, i) {
                    expression += "'" + arg + "'";
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

            if (args) {

                if (args[command]) {
                    args = args[command];
                }

                if (_.isArray(args)) {
                    _.each(args, function(arg) {
                        argsValues.push(model.get(arg));
                    });
                } else {
                    argsValues.push(model.get(args));
                }
            }

            this.launchCommand(object, command, argsValues);
        };

        this.getObjectByUid = gameManager.getObjectByUid;
    };
});