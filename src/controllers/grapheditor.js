/**
 * Created by Christophe on 28/10/2016.
 */
define([], function() {

    return function($scope) {

        $scope.bd1 = {
            deployed: true,
            x: 396,
            y: 451,
            type: "sprite",
            actions: [
                "act1",
                "act2",
                "act3",
                "act4",
                "act5"
            ],
            triggers: [
                "trig1",
                "trig2",
                "trig3"
            ]
        };

        $scope.bd2 = {
            deployed: true,
            x: 564,
            y: 206,
            type: "seq",
            actions: [
                "act1",
                "act2",
                "act3"
            ],
            triggers: [
                "trig1",
                "trig2",
                "trig3",
                "trig4"
            ]
        };

        $scope.bd3 = {
            deployed: true,
            x: 767,
            y: 465,
            type: "variable",
            actions: [
                "act1"
            ],
            triggers: [
                "trig1",
                "trig2"
            ]
        };

    }
});