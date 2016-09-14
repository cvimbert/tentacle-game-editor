/**
 * Created by Christophe on 14/09/2016.
 */
define([], function() {

    return function () {
        return {
            restrict: 'A',

            link: function (scope, element, attrs) {

                scope.$watch(attrs.displayboolean, function() {
                    $(element).toggleClass("visible", scope.$eval(attrs.displayboolean));
                }, true);
            }
        };
    }
});