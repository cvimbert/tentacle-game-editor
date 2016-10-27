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

            scope.childTabs = [];

            scope.toggle = function(tabindex) {

                var activeTab = scope.childTabs[tabindex];
                var passiveTab;

                // passiveTab n'est peut-être pas utile
                if (tabindex === 0) {
                    passiveTab = scope.childTabs[1];
                } else {
                    passiveTab = scope.childTabs[tabindex - 1];
                }

                _.each(scope.childTabs, function(tab, i) {
                    if (i !== tabindex) {
                        tab.toggle(false);
                    }
                });

                activeTab.toggle(true);
            };
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
            open: "=open",
            tabindex: "=tabindex"
        },

        link: function(scope, element, attributes) {

            scope.$parent.childTabs.push(scope);

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

            scope.triggerToggle = function(index) {
                scope.$parent.toggle(scope.tabindex);
            };

            scope.toggle = function(mustOpen) {
                //alert (mustOpen);
            };
        }
    }
});