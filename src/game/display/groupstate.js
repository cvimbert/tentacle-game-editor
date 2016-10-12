/**
 * Created by Christophe on 14/09/2016.
 */
define(["underscore"], function(_) {

    return {
        console: {
            prefix: "state",
            commands: {
                display: function(state) {
                    state.display();
                }
            }
        },
        "GroupState": function(model, modelManager, gameManager) {

            var spritesCollection;
            var group;

            this.initialize = function() {

                var spritesUidCollection = model.get("sprites");
                var groupUid = model.get("group");

                spritesCollection = [];

                _.each(spritesUidCollection, function(spriteUid) {
                    spritesCollection.push(gameManager.getObjectByUid(spriteUid));
                });

                group = gameManager.getObjectByUid(groupUid);
            };

            this.display = function() {

                group.hide();

                _.each(spritesCollection, function(sprite) {
                    sprite.show();
                });
            };

            this.update = function() {
                // ne fait rien, mais obligatoire pour la compatibilité avec les ConditionalGroupStateSet
            };

            this.hide = function() {
                group.hide();
            };
        }
    }
});