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
                }
            }
        },
        "Sprite": function(model, modelManager, gameManager) {
            _.extend(this, DisplayObject);

            var graphicSpriteUid;
            var graphicSpriteModel;
            var self = this;

            this.initialize = function() {
                graphicSpriteUid = model.get("reference");
                graphicSpriteModel = modelManager.getModelByUid(graphicSpriteUid);

                self.displayUid = graphicSpriteModel.uid;
            };
        }
    };
});