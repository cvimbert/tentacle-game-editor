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

            var controlSprite;

            this.initialize = function() {
                var spriteUid = model.get("sprite");
                controlSprite = gameManager.getObjectByUid(spriteUid);
            };

            this.trigger = function() {

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