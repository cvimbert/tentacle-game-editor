/**
 * Created by Christophe on 16/09/2016.
 */
define([], function() {

    return {
        console: {
            prefix: "var",
            commands: {
                set: function(variable, args) {
                    variable.set(args[0]);
                },
                get: function(variable) {
                    return variable.get();
                },
                reset: function(variable) {
                    variable.reset();
                }
            }
        },
        "Variable": function(model, modelManager, gameManager) {

            var type;
            var initValue;
            var currentValue;

            this.initialize = function() {

                type = model.get("variabletype");
                initValue = model.get("value");

                currentValue = initValue;
            };

            this.get = function() {
                return currentValue;
            };

            this.set = function(value) {
                switch (type) {
                    case "string":
                        currentValue = String(value);
                        break;

                    case "number":
                        currentValue = Number(value);
                        break;

                    case "boolean":
                        currentValue = Boolean(value);
                        break;
                }
            };

            this.reset = function(newInitValue) {

                if (newInitValue !== undefined) {
                    initValue = newInitValue;
                }

                currentValue = initValue;
            };
        }
    }
});