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

                // passiveTab n'est peut-être pas utile (si si ! ou pas)
                if (tabindex === 0) {
                    passiveTab = scope.childTabs[1];
                } else {
                    passiveTab = scope.childTabs[tabindex - 1];
                }

                _.each(scope.childTabs, function(tab) {
                    tab.calculateHeight();
                });

                _.each(scope.childTabs, function(tab, i) {
                    if (i !== tabindex) {
                        tab.toggle(false);
                        tab.liveopen = false;
                    }
                });

                activeTab.liveopen = true;
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

mainApp.directive("scrollingtab", ["$timeout", function($timeout) {

    return {

        restrict: "E",

        templateUrl: "scrolling_tabs/tab.html",

        scope: {
            tabindex: "=tabindex",
            open: "=open"
        },

        link: function(scope, element, attributes) {

            scope.liveopen = scope.open;

            scope.$parent.childTabs.push(scope);

            scope.liveProps = {
                height: 0
            };

            var init = false;

            var targetHeight;

            scope.calculateHeight = function() {
                targetHeight = element[0].querySelector(".tab-content").clientHeight;
            };

            scope.$watch('liveopen', function() {

                if (scope.liveopen) {
                    element.css("flex", 1);
                } else {
                    if (init) {
                        scope.liveProps.height = targetHeight;

                        TweenLite.to(scope.liveProps, 0.8, {
                            height: 0,
                            onUpdate: function() {
                                scope.$apply();
                            }
                        });
                    }

                    element.css("flex", 0);
                }
            }, true);

            $timeout(function() {
                init = true;
            });

            scope.triggerToggle = function(index) {
                scope.$parent.toggle(scope.tabindex);
            };

            scope.toggle = function(mustOpen) {
                //alert (mustOpen);
            };
        }
    }
}]);