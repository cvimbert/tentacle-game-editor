/**
 * Created by Christophe on 15/09/2016.
 */
define([], function() {

    return function () {
        return {
            restrict: 'A',

            link: function (scope, element, attrs) {

                element.bind("click", function() {

                });
            }
        };
    }
});