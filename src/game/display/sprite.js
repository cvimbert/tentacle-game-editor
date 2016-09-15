/**
 * Created by Christophe on 08/09/2016.
 */
define(["underscore", "displayobject"], function(_, DisplayObject) {

    return {
        console: {
            prefix: "sprite",
            commands: {
                show: function(sprite) {
                    sprite.show();
                },
                hide: function(sprite) {
                    sprite.hide();
                },
                toggle: function(sprite) {
                    sprite.toggle();
                }
            }
        },
        "Sprite": function(model, modelManager, gameManager) {
            _.extend(this, DisplayObject);

            this.gameManager = gameManager;

            var graphicSpriteUid;
            var graphicSpriteModel;
            var self = this;

            this.model = model;

            this.initialize = function() {
                graphicSpriteUid = model.get("reference");
                graphicSpriteModel = modelManager.getModelByUid(graphicSpriteUid);

                self.displayUid = graphicSpriteModel.uid;
            };
        }
    };
});