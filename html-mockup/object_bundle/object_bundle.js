/**
 * Created by Christophe on 23/10/2016.
 */
var mainApp = angular.module("object-bundle", []);

mainApp.controller("bundles-controller", function($scope) {

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

});

mainApp.directive("bundle", ["$timeout", function($timeout) {

    return {
        restrict: 'E',

        scope: {
            datas: "=datas"
        },

        templateUrl: "object_bundle/bundle.html",

        link: function (scope, element, attrs) {

            var gameObject = element[0].querySelector('.game-object');

            Draggable.create(element, {
                type: "x,y",
                trigger: gameObject
            });

            scope.satellitesScopes = [];

            scope.translate = 90;

            var widthVal = 180;

            scope.liveProps = {
                width: 0,
                height: 0,
                radius: 0,
                opacity: 0
            };

            scope.addElement = function(type) {
                scope.datas[type].push("ok");

                // un update des enfants
                $timeout(function() {
                    var count = 0;
                    _.each(scope.satellitesScopes, function(satScope) {

                        if (satScope.category === type) {
                            satScope.length = scope.datas[type].length;
                            satScope.calculate();

                            if (count < scope.datas[type].length - 1) {
                                satScope.toggle(true, true);
                            } else {
                                satScope.toggle(true);
                            }

                            count++;
                        }
                    });
                });

            };

            scope.getRotation = function() {
                return -45;
            };

            var deployed = {
                width: widthVal,
                height: widthVal,
                opacity: 1,
                onUpdate: function() {
                    scope.$apply();
                }
            };

            var undeployed = {
                width: 0,
                height: 0,
                opacity: 0
            };

            var isDeployed = false;

            scope.toggle = function() {
                var vals;

                if (!isDeployed) {
                    vals = deployed;
                } else {
                    vals = undeployed;
                }

                scope.liveProps.radius = widthVal / 2;

                scope.$apply();

                TweenLite.to(scope.liveProps, 0.5, vals);

                _.each(scope.satellitesScopes, function(satScope) {
                    satScope.toggle();
                });

                isDeployed = !isDeployed;
            };

            angular.element(gameObject).on("click", scope.toggle);


            TweenLite.set(element, {
                x: scope.datas.x,
                y: scope.datas.y
            });
        }
    }
}]);

mainApp.directive("satellite", function() {

    return {
        restrict: "E",

        scope: {
            datas: "=datas",
            translate: "=translate",
            from: "=from",
            to: "=to",
            position: "=position",
            length: "=length",
            category: "@category"
        },

        templateUrl: "object_bundle/satellite.html",

        link: function(scope, element, attrs) {


            scope.liveProps = {
                translation: 0,
                rotation: 0,
                opacity: 0
            };

            Draggable.create(element, {
                type: "x,y",
                onDragEnd: function() {
                    TweenLite.set(element, {clearProps: "transform"});
                }
            });

            scope.$parent.satellitesScopes.push(scope);

            scope.calculate = function() {
                var gap = (scope.to - scope.from) / (scope.length * 2);
                scope.rotation = scope.from + (scope.position * 2 + 1) * gap;
            };

            scope.calculate();

            var isDeployed = false;

            angular.element(element).css("display", "none");

            scope.toggle = function(forcedValue, animateRotation) {

                if (forcedValue !== undefined) {
                    isDeployed = !forcedValue;
                }

                if (!isDeployed) {
                    angular.element(element).css("display", "block");

                    TweenLite.to(scope.liveProps, 0.5, {
                        translation: scope.translate,
                        opacity: 1,
                        onUpdate: function() {
                            scope.$apply();
                        }
                    });
                } else {
                    TweenLite.to(scope.liveProps, 0.5, {
                        translation: 0,
                        opacity: 0,
                        onUpdate: function() {
                            scope.$apply();
                        },
                        onComplete: function() {
                            angular.element(element).css("display", "none");
                        }
                    });
                }

                if (!animateRotation) {
                    scope.liveProps.rotation = scope.rotation;
                } else {
                    TweenLite.to(scope.liveProps, 0.5, {
                        rotation: scope.rotation
                    });
                }

                isDeployed = !isDeployed;
            };

            scope.update = function(animated) {
                if(animated === false) {
                    scope.liveProps.translation = scope.translate;
                } else {

                }


            };

            //scope.update(true);
        }
    }
});