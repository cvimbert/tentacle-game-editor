/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore"], function(_) {

    return function (model, modelManager, gameManager) {

        var spritesUidCollection = model.get("sprites");
        var spritesCollection = [];


        this.getDisplaySpritesUid = function() {
            _.each(spritesUidCollection, function(spriteUid) {
                spritesCollection.push(modelManager.getModelByUid(spriteUid));
            });
        };

        this.show = function() {
            _.each(spritesCollection, function() {

            });
        };

        this.hide = function() {
            _.each(spritesCollection, function() {

            });
        };
    }
});