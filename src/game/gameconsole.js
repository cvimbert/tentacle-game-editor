/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore"], function(_) {

    return function () {

        var commandsSets = {};
        var self = this;
        var gameManager;
        this.onMessage = null;

        this.initialize = function(gManager) {
            gameManager = gManager;
        };

        this.registerObject = function(object) {
            var prefix = object.console.prefix;
            var commands = object.console.commands;

            /*_.each(commands, function(commandFunction, commandName) {

            });*/

            commandsSets[prefix] = commands;
        };

        this.evalCommand = function(commandExpression) {

            self.message(commandExpression);

            var commandArray = commandExpression.split(" ");

            if (commandArray.length < 3) {
                self.message("Commande mal formée");
                return false;
            }

            var setName = commandArray[0];
            var objectName = commandArray[1];
            var commandName = commandArray[2];
            var commandArgs;

            /*if (commandArray.length > 3) {
                commandArgs = commandArray[3];
            }*/

            if (!commandsSets[setName]) {
                self.message("Ce set de commandes n'existe pas");
                return false;
            }

            var expressionObject = gameManager.getObjectByName(objectName);

            if (!expressionObject) {
                self.message("Cet objet n'existe pas");
                return false;
            }

            console.log(expressionObject);

            if (!commandsSets[setName][commandName]) {
                self.message("Cette commande n'existe pas pour ce type d'objet");
                return false;
            }

            // on peut finalement lancer la commande
            var commandFunction = commandsSets[setName][commandName];

            commandFunction(expressionObject);
        };

        this.message = function(messageString) {
            console.log(messageString);

            if (this.onMessage) this.onMessage(messageString);
        };

    }
});