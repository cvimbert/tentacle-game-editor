/**
 * Created by Christophe on 05/09/2016.
 */

$(document).ready(function() {

    require(["monitoringapp", "modelmonitorcontroller", "panelcontroller", "panelscontroller", "spritespanelcontroller", "draggabledirective"], function(MonitoringApp, modelMonitorController, panelController, panelsController, spritesPanelController, draggableDirective) {

        var shared = {};

        var mainApp = angular.module("monitoring-panel", ['ngRoute']);
        mainApp.controller("modelmonitorcontroller", modelMonitorController);
        mainApp.controller("panelcontroller", panelController);
        mainApp.controller("panelscontroller", panelsController);
        mainApp.controller("spritespanelcontroller", spritesPanelController);
        mainApp.directive('draggable', draggableDirective);
        mainApp.factory('shared', function() {
            return shared;
        });

        var app = new MonitoringApp(mainApp, modelDescriptorV3, panels);
        shared.modelManager = app.modelManager;
    });
});

