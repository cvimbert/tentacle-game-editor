/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore", "sprite", "spritesgroup"], function(_, Sprite, SpritesGroup) {

    return function (modelManager) {

        var modelsByType = {};
        var models = {};

        this.initialize = function() {
            modelsByType = modelManager.getCompleteModel();

            _.each(modelsByType, function(model, type) {

            });
        };

        this.executeDisplayList = function(displayList) {

        };

        this.showSprites = function(spritesList) {

        };

        this.hideSprites = function(spritesList) {

        }
    }
});