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

        $scope.getImageUrl = function (model, folder) {
            var spriteFile = shared.modelManager.getModelByUid(model.get("reference"));
            var spritePackage = shared.modelManager.getModelByUid(spriteFile.get("package"));
            return spritePackage.get("identifier") + "/" + folder + "/" + spriteFile.get("file");
        };

        $scope.backgroundSprites = shared.modelManager.getModelByType("BackgroundSprite");

        $scope.onDropped = function(elem) {
            // création d'un nouvel objet de jeu en fonction du type d'objet déposé
            alert (elem.type);

            switch (elem.type) {

                case "SpriteFileReference":
                    shared.modelManager.addModel("Sprite", true, {
                        reference: elem.uid,
                        x: 0,
                        y: 0
                    });

                    break;

                case "BackgroundFileReference":

                    break;

                case "ControlFileReference":

                    break;
            }
        };
    }
});