/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore"], function(_) {

    return {
        console: {
            prefix: "spritesgroup",
            commands: {
                showall: function() {
                    this.show();
                },
                hideall: function() {
                    this.hide();
                }
            }
        },
        constructor: function(model, modelManager, gameManager) {

            var spritesUidCollection;
            var spritesCollection;

            this.initialize = function() {
                spritesUidCollection = model.get("sprites");
                spritesCollection = [];

                _.each(spritesUidCollection, function(spriteUid) {
                    spritesCollection.push(gameManager.getObjectByUid(spriteUid));
                });
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
    };
});