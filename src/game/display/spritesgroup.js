/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore"], function(_) {

    return function (model, modelManager, gameManager) {

        var spritesUidCollection = model.get("sprites");
        var spritesCollection = [];

        _.each(spritesUidCollection, function(spriteUid) {
            spritesCollection.push(gameManager.getObjectByUid(spriteUid));
        });

        this.getDisplaySpritesUid = function() {

        };

        this.show = function() {
            _.each(spritesCollection, function(sprite) {
                sprite.show();
            });
        };

        this.hide = function() {
            _.each(spritesCollection, function(sprite) {
                sprite.hide();
            });
        };
    }
});