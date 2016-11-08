/**
 * Created by Christophe on 08/11/2016.
 */
define(["Draggable"], function(Draggable) {

    return function () {

        return {

            templateUrl: "includes/directives/sceneeditor/toolsbar.html",

            restrict: "E",

            scope: {

            },

            link: function(scope, element, attributes) {
                Draggable.create(element, {
                    type: "x,y",
                    trigger: element[0].querySelector(".center")
                });
            }
        }
    }
});