/**
 * Created by Christophe on 13/09/2016.
 */
define(["underscore"], function(_) {

    return function (modelManager) {

        var modelsByType = {};

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