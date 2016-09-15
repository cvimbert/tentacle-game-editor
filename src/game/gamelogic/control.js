/**
 * Created by Christophe on 15/09/2016.
 */
define([], function() {

    return {
        console: {
            prefix: "control",
            commands: {

            }
        },
        "Control": function(model, modelManager, gameManager) {

            this.initialize = function() {

            };

            this.enable = function() {

            };

            this.disable = function() {

            };

            this.toggle = function(value) {
                if (value)
                    this.enable();
                else
                    this.disable();
            };
        }
    }
});