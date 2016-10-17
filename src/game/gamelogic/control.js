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
            var zoning;
            var zone = {};
            var self = this;

            this.initialize = function() {
                var spriteUid = model.get("sprite");
                controlSprite = gameManager.getObjectByUid(spriteUid);
                zoning = model.get("zoning");

                if (zoning === "haszone") {
                    zone = {
                        x: model.get("x"),
                        y: model.get("y"),
                        width: model.get("width"),
                        height: model.get("height")
                    }
                }
            };

            this.trigger = function() {

            };

            function isInZone(x, y) {
                return x >= zone.x && x < zone.x + zone.width && y >= zone.y && y < zone.y + zone.height;
            }

            function dispatchIfInZone(event, eventToDispatch) {
                if (zoning === "nozone" || isInZone(event.offsetX, event.offsetY)) {
                    self.dispatchEvent(eventToDispatch);
                }
            }

            this.enable = function() {

                controlDOMElement = controlSprite.getDOMElement();

                controlDOMElement.onmousedown = function (e) {
                    dispatchIfInZone(e, "controldown");
                };

                controlDOMElement.onmouseup = function (e) {
                    dispatchIfInZone(e, "controlup");
                };

                controlDOMElement.onclick = function (e) {
                    dispatchIfInZone(e, "controlclick");
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