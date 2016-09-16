/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore"], function(_) {

    return function () {

        var commandsSets = {};
        var self = this;
        var gameManager;
        var history = [];
        var historyIndex = 0;
        this.onMessage = null;

        this.initialize = function(gManager) {
            gameManager = gManager;
        };

        this.registerObject = function(object) {
            var prefix = object.console.prefix;
            var commands = object.console.commands;

            commandsSets[prefix] = commands;
        };

        this.reinit = function() {
            historyIndex = history.length;
        };

        this.getPreviousInHistory = function() {

            if (historyIndex > 0) {
                historyIndex--;
                return history[historyIndex];
            } else {
                return null;
            }
        };

        this.getNextInHistory = function() {

            if (historyIndex < history.length - 1) {
                historyIndex++;
                return history[historyIndex];
            } else {
                return null;
            }
        };

        this.evalCommand = function(commandExpression) {

            history.push(commandExpression);
            historyIndex = history.length;
            self.message(commandExpression);

            var commandArray = commandExpression.split(" ");

            if (commandArray.length < 3) {
                self.message("Commande mal formée");
                return false;
            }

            var setName = commandArray[0];
            var objectName = commandArray[1];
            var commandName = commandArray[2];
            var commandArgs = [];

            for (var i = 3; i < commandArray.length; i++) {
                commandArgs.push(commandArray[i]);
            }

            if (!commandsSets[setName]) {
                self.message("Ce set de commandes n'existe pas");
                return false;
            }

            var expressionObject = gameManager.getObjectByName(objectName);

            if (!expressionObject) {
                self.message("Cet objet n'existe pas");
                return false;
            }

            if (!commandsSets[setName][commandName]) {
                self.message("Cette commande n'existe pas pour ce type d'objet");
                return false;
            }

            // on peut finalement lancer la commande
            var commandFunction = commandsSets[setName][commandName];

            if (commandArgs.length > 0)
                commandFunction(expressionObject, commandArgs);
            else
                commandFunction(expressionObject);
        };

        this.message = function(messageString) {
            console.log(messageString);
            if (this.onMessage) this.onMessage(messageString);
        };

    }
});