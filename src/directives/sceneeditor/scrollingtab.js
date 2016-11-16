/**
 * Created by Christophe on 28/10/2016.
 */
define(["TweenLite", "Draggable", "jquery"], function(TweenLite, Draggable, $) {

    return function($timeout) {

        return {

            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/tab.html",

            scope: {
                tabindex: "=tabindex",
                open: "=open",
                datas: "=datas",
                category: "=category",
                dropedontarget: "=dropedontarget"
            },

            link: function(scope, element, attributes) {

                scope.liveopen = scope.open;

                scope.$parent.childTabs.push(scope);

                scope.liveProps = {
                    height: 0
                };

                var elem = element[0].querySelector(".tab-content");


                $(elem).simplebar({
                    //autoHide: false
                });

                $timeout(function() {


                    /*$(elem).simplebar({
                        autoHide: false
                    });*/


                }, 1100);


                // une amélioration à apporter plus tard
                /*Draggable.create(element[0].querySelector(".title"), {
                    type: "y",
                    bounds: element,
                    onDrag: function() {

                    },
                    onDragEnd: function() {

                    }
                });*/

                var init = false;

                var targetHeight;

                scope.calculateHeight = function() {
                    targetHeight = element[0].querySelector(".tab-content").clientHeight;
                };

                scope.setOverflow = function(overflow) {
                    /*var tc = angular.element(element[0].querySelector(".tab-content"));

                    if (overflow) {
                        tc.css("overflow", "auto");
                    } else {
                        tc.css("overflow", "hidden");
                    }*/
                };

                scope.setContentVisibility = function() {

                };

                scope.$watch('liveopen', function() {

                    if (scope.liveopen === true) {
                        element.css("flex", "1");
                    } else {

                        scope.setOverflow(false);

                        if (init) {

                            scope.liveProps.height = targetHeight;

                            TweenLite.to(scope.liveProps, 0.8, {
                                height: 0,
                                onUpdate: function() {
                                    scope.$apply();
                                },
                                onComplete: function() {
                                    scope.$parent.$parent.updateOverflowAndVisibility();
                                }
                            });
                        }

                        element.css("flex", "0");
                    }
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