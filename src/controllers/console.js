/**
 * Created by Christophe on 10/09/2016.
 */
define([], function() {
    return function ($scope, shared) {

        $scope.text = "";
        $scope.prompt = "";

        shared.gameConsole.reinit();

        shared.gameConsole.onMessage = function(message) {
            $scope.text += "> " + message + "<br>";
        };

        $scope.sendCommand = function(e) {

            var cmd;

            switch (e.keyCode) {
                case 13:
                    shared.gameConsole.evalCommand($scope.prompt);
                    $scope.prompt = "";
                    break;

                case 38:
                    cmd = shared.gameConsole.getPreviousInHistory();
                    if (cmd) $scope.prompt = cmd;
                    break;

                case 40:
                    cmd = shared.gameConsole.getNextInHistory();
                    if (cmd) $scope.prompt = cmd;
                    break;
            }
        }
    }
});