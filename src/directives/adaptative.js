/**
 * Created by Christophe on 03/11/2016.
 */
define([], function() {

    return function () {

        return {

            restrict: "A",

            link: function(scope, element, attributes) {

                element[0].onload = function() {
                    if (element[0].width > 150) {
                        element.css("width", "150px");
                    }
                }
            }
        }
    }
});