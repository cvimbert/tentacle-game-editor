/**
 * Created by Christophe on 23/10/2016.
 */
var mainApp = angular.module("object-bundle", []);

mainApp.controller("bundles-controller", function($scope) {

    $scope.bd1 = {
        deployed: true,
        x: 300,
        y: 300,
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
    }

});

mainApp.directive("bundle", ["$timeout", function($timeout) {

    return {
        restrict: 'E',

        scope: {
            datas: "=datas"
        },

        templateUrl: "object_bundle/bundle.html",

        link: function (scope, element, attrs) {

            scope.satellitesScopes = [];

            scope.translate = 90;

            var widthVal = 180;

            scope.liveProps = {
                width: 0,
                height: 0,
                radius: 0,
                opacity: 0
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

                TweenLite.to(scope.liveProps, 1, vals);

                _.each(scope.satellitesScopes, function(satScope) {
                    satScope.toggle();
                });

                isDeployed = !isDeployed;
            };

            var gameObject = element[0].querySelector('.game-object');
            gameObject.onclick = scope.toggle;


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
            length: "=length"
        },

        templateUrl: "object_bundle/satellite.html",

        link: function(scope, element, attrs) {
            var gap = (scope.to - scope.from) / (scope.length * 2);
            scope.rotation = scope.from + (scope.position * 2 + 1) * gap;

            scope.liveProps = {
                translation: 0,
                rotation: 0,
                opacity: 0
            };

            scope.$parent.satellitesScopes.push(scope);

            element[0].onclick = function() {

            };

            scope.deploy = function() {

            };

            var isDeployed = false;

            angular.element(element).css("display", "none");

            scope.toggle = function() {
                if (!isDeployed) {
                    angular.element(element).css("display", "block");

                    TweenLite.to(scope.liveProps, 1, {
                        translation: scope.translate,
                        opacity: 1,
                        onUpdate: function() {
                            scope.$apply();
                        }
                    });
                } else {
                    TweenLite.to(scope.liveProps, 1, {
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

                scope.liveProps.rotation = scope.rotation;
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