/**
 * Created by Christophe on 03/11/2016.
 */
define(["jquery", "Draggable", "packery"], function($, Draggable, Packery) {

    return function ($timeout) {

        return {
            restrict: "E",

            templateUrl: "includes/directives/sceneeditor/selector.html",

            scope: {
                datas: "=datas",
                category: "=category",
                dropedontarget: "=dropedontarget",
                mode: "&mode"
            },

            link: function(scope, element, attributes) {
                //return;

                $timeout(function() {
                    var pack = new Packery(element[0].querySelector(".grid"), {
                        itemSelector: '.grid-item',
                        percentPosition: true,
                        gutter: 1
                    });
                });

            }
        }
    }
});