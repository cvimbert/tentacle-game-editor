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

        var registeredSprites = [];

        $scope.onRegisterSprite = function(editorSpriteScope) {
            registeredSprites.push(editorSpriteScope);
        };

        $scope.selectedSprite;

        $scope.onSelectSprite = function(spriteScope) {
            $scope.selectedSprite = spriteScope;

            _.each(registeredSprites, function(sprite) {
                sprite.unselect();
            });

            spriteScope.select();
            $scope.$apply();
        };

        $scope.backgroundSprites = shared.modelManager.getModelByType("BackgroundSprite");
        $scope.sprites = shared.modelManager.getModelByType("Sprite");
        $scope.controls = shared.modelManager.getModelByType("ControlSprite");

        $scope.onDropped = function(elem, xPos, yPos) {
            // création d'un nouvel objet de jeu en fonction du type d'objet déposé
            switch (elem.type) {

                case "SpriteFileReference":
                    shared.modelManager.addModel("Sprite", true, {
                        reference: elem.uid,
                        x: xPos,
                        y: yPos
                    });

                    break;

                case "BackgroundFileReference":
                    shared.modelManager.addModel("BackgroundSprite", true, {
                        reference: elem.uid,
                        x: 0,
                        y: 0
                    });
                    break;

                case "ControlFileReference":
                    shared.modelManager.addModel("ControlSprite", true, {
                        reference: elem.uid,
                        x: xPos,
                        y: yPos
                    });
                    break;
            }

            $scope.$apply();

        };
    }
});