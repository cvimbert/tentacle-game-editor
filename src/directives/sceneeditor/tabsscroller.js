/**
 * Created by Christophe on 28/10/2016.
 */
define(["underscore"], function(_) {

    return function()  {

        return {

            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/scroller.html",

            scope: {
                datas: "=datas",
                dropedontarget: "=dropedontarget"
            },

            link: function(scope, element, attributes) {

                scope.childTabs = [];

                scope.updateOverflowAndVisibility = function() {
                    _.each(scope.childTabs, function(tab) {
                        if (tab.liveopen === true) {
                            tab.setOverflow(true);
                        }
                    });
                };

                scope.toggle = function(tabindex) {

                    var activeTab = scope.childTabs[tabindex];

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