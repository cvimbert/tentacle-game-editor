/**
 * Created by Christophe on 10/09/2016.
 */
define([], function() {
    return function ($scope, shared) {

        $scope.text = "ok";
        $scope.prompt = "pas ok";


        $scope.sendCommand = function(e) {

            if (e.keyCode === 13) {
                alert ($scope.prompt);
            }
        }
    }
});