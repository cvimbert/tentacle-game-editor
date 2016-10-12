/**
 * Created by Christophe on 16/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

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
            _.extend(this, EventDispatcher);

            var type;
            var initValue;
            var currentValue;

            this.initialize = function() {

                type = model.get("variabletype");
                initValue = model.get("value");

                currentValue = initValue;
            };

            function convert(value) {
                switch (type) {
                    case "string":
                        return String(value);

                    case "number":
                        return Number(value);

                    case "boolean":
                        return Boolean(Number);
                }
            }

            this.get = function() {
                return convert(currentValue);
            };

            this.getType = function() {
                return model.get("variabletype");
            };

            this.set = function(value) {
                currentValue = convert(value);
                this.dispatchEvent("change", value);
            };

            this.increment = function() {
                if (type === "number") {
                    this.set(currentValue + 1);
                } else {
                    console.log("Impossible increment: wrong variable type.");
                }
            };

            this.decrement = function() {
                if (type === "number") {
                    this.set(currentValue - 1);
                } else {
                    console.log("Impossible decrement: wrong variable type.")
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