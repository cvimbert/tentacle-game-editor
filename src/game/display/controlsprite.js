/**
 * Created by Christophe on 15/09/2016.
 */

define(["displayobject"], function(DisplayObject) {

    return {
        console: {
            prefix: "controlsprite",
            commands: {

            }
        },
        "ControlSprite": function(model, modelManager, gameManager) {
            _.extend(this, DisplayObject);

            this.model = model;
            this.gameManager = gameManager;

            this.initialize = function() {

            };

            this.getDOMElement = function() {
                return document.getElementById("control-" + model.uid);
            };
        }
    }
});