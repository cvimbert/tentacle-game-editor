/**
 * Created by Christophe on 08/09/2016.
 */
define([], function() {
    return function ($scope, shared) {

        $scope.navigateTo = function (panelsSetId) {
            $location.path("/" + panelsSetId);
        };

        $scope.save = function () {
            shared.modelManager.saveToStorage("base");
        };
    }
});