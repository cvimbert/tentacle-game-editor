/**
 * Created by Christophe on 26/10/2016.
 */
var mainApp = angular.module("scrolling-tabs", []);

mainApp.controller("tabs-controller", function($scope) {

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

        },

        link: function(scope, element, attributes) {

        }
    }
});