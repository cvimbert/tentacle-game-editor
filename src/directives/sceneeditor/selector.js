/**
 * Created by Christophe on 03/11/2016.
 */
define(["Draggable"], function(Draggable) {

    return function () {

        return {
            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/selector.html",

            scope: {
                datas: "=datas",
                category: "=category",
                dropedontarget: "=dropedontarget",
                mode: "&mode"
            },

            link: function(scope, element, attributes) {

            }
        }
    }
});