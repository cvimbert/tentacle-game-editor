/**
 * Created by Christophe on 28/10/2016.
 */
define(["underscore", "Draggable", "TweenLite"], function(_, Draggable, TweenLite) {

    return function($timeout) {

        return {
            restrict: 'E',

            scope: {
                datas: "=datas"
            },

            templateUrl: "include/directives/grapheditor/bundle.html",

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
    }
});