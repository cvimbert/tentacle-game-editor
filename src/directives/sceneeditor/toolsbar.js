/**
 * Created by Christophe on 08/11/2016.
 */
define(["Draggable"], function(Draggable) {

    return function () {

        return {

            templateUrl: "includes/directives/sceneeditor/toolsbar.html",

            restrict: "E",

            scope: {
                selection: "=selection",
                deletion: "=deletion"
            },

            link: function(scope, element, attributes) {
                Draggable.create(element, {
                    type: "x,y",
                    trigger: element[0].querySelector(".center")
                });

                function listenArrowClick(selector, onclick) {
                    var autoModeTimeout, autoModeInterval;

                    var selectedElement = angular.element(element[0].querySelector(selector));

                    selectedElement.on("touchstart mousedown", function(e) {
                        onclick();

                        autoModeTimeout = setTimeout(function() {
                            autoModeInterval = setInterval(onclick, 100);
                        }, 500);

                        e.preventDefault();
                    });

                    selectedElement.on("touchend mouseup", function(e) {
                        clearTimeout(autoModeTimeout);
                        clearInterval(autoModeInterval);
                        e.preventDefault();
                    });
                }

                function listenClick(selector, onclick) {
                    var selectedElement = angular.element(element[0].querySelector(selector));

                    selectedElement.on("touchstart mousedown", function(e) {
                        onclick();
                        e.preventDefault();
                    });
                }

                function goUp() {
                    scope.selection.move("y", -1);
                }

                function goDown() {
                    scope.selection.move("y", 1);
                }

                function goRight() {
                    scope.selection.move("x", 1);
                }

                function goLeft() {
                    scope.selection.move("x", -1);
                }

                listenArrowClick(".up-arrow", goUp);
                listenArrowClick(".left-arrow", goLeft);
                listenArrowClick(".right-arrow", goRight);
                listenArrowClick(".bottom-arrow", goDown);

                listenClick(".delete", function() {
                    if (scope.selection) {
                        scope.deletion(scope.selection.model);
                        scope.$apply();
                    }
                });
            }
        }
    }
});