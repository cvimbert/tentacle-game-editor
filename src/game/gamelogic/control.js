/**
 * Created by Christophe on 15/09/2016.
 */
define(["underscore", "eventdispatcher"], function(_, EventDispatcher) {

    return {
        console: {
            prefix: "control",
            commands: {

            }
        },
        "Control": function(model, modelManager, gameManager) {

            _.extend(this, EventDispatcher);

            var controlSprite;
            var controlDOMElement;

            this.initialize = function() {
                var spriteUid = model.get("sprite");
                controlSprite = gameManager.getObjectByUid(spriteUid);
            };

            this.trigger = function() {

            };

            this.enable = function() {

                var self = this;

                controlDOMElement = controlSprite.getDOMElement();

                controlDOMElement.onclick = function() {
                    self.dispatchEvent("click");
                };

                controlDOMElement.onmousedown = function() {
                    self.dispatchEvent("press");
                };

                controlDOMElement.onmouseup = function() {
                    self.dispatchEvent("release");
                };
            };

            this.disable = function() {
                controlDOMElement.onclick = function() {};
                controlDOMElement.onmousedown = function() {};
                controlDOMElement.onmouseup = function() {};
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