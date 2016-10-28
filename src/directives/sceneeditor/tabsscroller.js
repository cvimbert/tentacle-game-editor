/**
 * Created by Christophe on 28/10/2016.
 */
define(["underscore"], function(_) {

    return function()  {

        return {

            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/scroller.html",

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
    }
});