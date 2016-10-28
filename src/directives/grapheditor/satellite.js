/**
 * Created by Christophe on 28/10/2016.
 */
define(["Draggable", "TweenLite"], function(Draggable, TweenLite) {

    return function() {

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

            templateUrl: "include/directives/grapheditor/satellite.html",

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
    }
});