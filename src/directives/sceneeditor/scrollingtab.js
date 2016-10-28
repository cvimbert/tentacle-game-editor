/**
 * Created by Christophe on 28/10/2016.
 */
define(["TweenLite"], function(TweenLite) {

    return function($timeout) {

        return {

            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/tab.html",

            scope: {
                tabindex: "=tabindex",
                open: "=open"
            },

            link: function(scope, element, attributes) {

                scope.liveopen = scope.open;

                scope.$parent.childTabs.push(scope);

                scope.liveProps = {
                    height: 0
                };

                var init = false;

                var targetHeight;

                scope.calculateHeight = function() {
                    targetHeight = element[0].querySelector(".tab-content").clientHeight;
                };

                scope.$watch('liveopen', function() {

                    if (scope.liveopen === true) {
                        element.css("flex", 1);
                    } else {
                        if (init) {
                            scope.liveProps.height = targetHeight;

                            TweenLite.to(scope.liveProps, 0.8, {
                                height: 0,
                                onUpdate: function() {
                                    scope.$apply();
                                }
                            });
                        }

                        element.css("flex", 0);
                    }

                    alert (scope.liveopen);
                }, true);

                $timeout(function() {
                    init = true;
                });

                scope.triggerToggle = function(index) {
                    scope.$parent.toggle(scope.tabindex);
                };

                scope.toggle = function(mustOpen) {
                    //alert (mustOpen);
                };
            }
        }
    }
});