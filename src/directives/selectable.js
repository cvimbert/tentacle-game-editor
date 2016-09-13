/**
 * Created by Christophe on 12/09/2016.
 */
define([], function() {

    return function () {
        return {
            restrict: 'A',
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {

                //var model = scope.$eval(attrs.selectable);

                element.bind("mousedown", function() {
                    ngModel.$setViewValue(!ngModel.$viewValue);

                    $(element).toggleClass("selected", ngModel.$viewValue);
                });
            }
        };
    }
});