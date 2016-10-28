/**
 * Created by Christophe on 28/10/2016.
 */
define([], function() {

    return function() {

        return {

            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/title.html",

            scope: {
                title: "@title"
            },

            link: function(scope, element, attributes) {

            }
        }
    }
});