/**
 * Created by Christophe on 05/09/2016.
 */
(function(factory) {

    var root = (typeof self == 'object' && self.self === self && self) ||
        (typeof global == 'object' && global.global === global && global);

    if (typeof define === 'function' && define.amd) {
        define(["jquery", "underscore"], function($, _) {
            return factory($, _);
        });
    } else {
        root.TentacleLoadingManager = factory(root.$, root._);
    }

})(function($, _) {

    return function () {
        var files = [];
        var datas = {};

        this.addFile = function (url) {
            files.push(url);
        };

        this.load = function (callback) {

            var count = 0;

            _.each(files, function (url) {

                $.get(url, function (data) {
                    datas[url] = data;

                    count++;

                    if (count === files.length) {
                        callback(datas);
                    }
                });
            });
        };
    }
});