/* global Tentacle */

define([], function() {
    return function ($scope, shared) {


        var currentSelection = [];

        $scope.init = function (datas) {
            var serDatas = atob(datas);
            datasObj = JSON.parse(serDatas);

            for (var propName in datasObj) {
                $scope[propName] = datasObj[propName];
            }

            $scope.getModels();

            $scope.controlSprites = shared.modelManager.getModelByType("ControlSprite");
            $scope.foregroundSprites = shared.modelManager.getModelByType("ForegroundSprite");
            $scope.backgroundSprites = shared.modelManager.getModelByType("BackgroundSprite");
        };

        $scope.getModels = function () {
            $scope.models = shared.modelManager.getModelByType($scope.modeltype);
        };

        $scope.addReferenceItem = shared.addReferenceItem;

        $scope.editItem = shared.editItem;

        $scope.editItemByItem = shared.editItemByItem;

        $scope.getName = shared.getName;

        $scope.getSpriteUrl = function (model) {
            return getImageUrl(model, "sprites");
        };

        $scope.getControlUrl = function (model) {
            return getImageUrl(model, "controls");
        };

        $scope.getImageUrl = function (model, folder) {
            var spriteFile = shared.modelManager.getModelByUid(model.get("reference"));
            var spritePackage = shared.modelManager.getModelByUid(spriteFile.get("package"));
            return spritePackage.get("identifier") + "/" + folder + "/" + spriteFile.get("file");
        };

        $scope.deleteItem = function (descid, item, $event) {
            $event.stopPropagation();
            shared.modelManager.deleteItem(descid, item);
        };

        $scope.isSelected = function(model) {
            return currentSelection.indexOf(model) !== -1;
        };

        $scope.clearSelection = function() {
            // pas bonne idée ça
            //currentSelection = [];
        };

        $scope.toggleSelection = function(element) {
            var jElement = $(element);
            var elementId = jElement.data("id");
            var model = shared.modelManager.getModelByUid(elementId);

            if (!$scope.isSelected(model)) {
                currentSelection.push(model);
                jElement.addClass("selected");
            } else {
                currentSelection.splice(currentSelection.indexOf(model), 1);
                jElement.removeClass("selected");
            }
        };
    };
});
