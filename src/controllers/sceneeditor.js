/**
 * Created by Christophe on 28/10/2016.
 */
define([], function() {

    return function($scope, shared) {

        $scope.scrollerDatas = {
            octopus: {
                sprites: shared.modelManager.getModelByType("SpriteFileReference"),
                decorations: shared.modelManager.getModelByType("BackgroundFileReference"),
                controls: shared.modelManager.getModelByType("ControlFileReference")
            }
        };

        $scope.package = "octopus";
    }
});