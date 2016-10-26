/**
 * Created by Christophe on 26/10/2016.
 */
var mainApp = angular.module("scrolling-tabs", []);

mainApp.controller("tabs-controller", function($scope) {

    $scope.scrollerDatas = {
        octopus: {
            sprites: {

            },
            backgrounds: {

            },
            controls: {

            }
        }
    };

});

mainApp.directive("tabsscroller", function()  {

    return {

        restrict: "E",

        templateUrl: "scrolling_tabs/scroller.html",

        scope: {
            datas: "=datas"
        },

        link: function(scope, element, attributes) {

        }
    }
});

mainApp.directive("scrollingtabstitle", function() {

    return {

        restrict: "E",

        templateUrl: "scrolling_tabs/title.html",

        scope: {
            title: "@title"
        },

        link: function(scope, element, attributes) {

        }
    }
});

mainApp.directive("scrollingtab", function() {

    return {

        restrict: "E",

        templateUrl: "scrolling_tabs/tab.html",

        scope: {
            open: "=open"
        },

        link: function(scope, element, attributes) {

            scope.liveProps = {
                height: 0
            };

            scope.$watch(scope.open, function() {
                if (scope.open) {
                    element.css("flex", 1);
                } else {
                    element.css("flex", 0);
                }
            });
        }
    }
});