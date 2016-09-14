/**
 * Created by Christophe on 10/09/2016.
 */
define([], function() {
    return function ($scope, shared) {

        $scope.text = "";
        $scope.prompt = "";

        shared.gameConsole.onMessage = function(message) {
            $scope.text += "> " + message + "<br>";
        };

        $scope.sendCommand = function(e) {
            if (e.keyCode === 13) {
                shared.gameConsole.evalCommand($scope.prompt);
                $scope.prompt = "";
            }
        }
    }
});