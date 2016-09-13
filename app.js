/**
 * Created by Christophe on 05/09/2016.
 */

$(document).ready(function() {

    require(["gamemanager", "monitoringapp", "modelmonitorcontroller", "panelcontroller", "panelscontroller", "spritespanelcontroller", "draggabledirective", "toolbarpanelcontroller", "console", "contenteditable", "selectable"], function(GameManager, MonitoringApp, modelMonitorController, panelController, panelsController, spritesPanelController, draggableDirective, toolbarPanelController, console, contentEditable, selectable) {

        var shared = {};

        var mainApp = angular.module("monitoring-panel", ['ngRoute']);
        mainApp.controller("modelmonitorcontroller", modelMonitorController);
        mainApp.controller("panelcontroller", panelController);
        mainApp.controller("panelscontroller", panelsController);
        mainApp.controller("spritespanelcontroller", spritesPanelController);
        mainApp.controller("toolbarpanelcontroller", toolbarPanelController);
        mainApp.controller("consolecontroller", console);
        mainApp.directive('draggable', draggableDirective);
        mainApp.directive('contenteditable', contentEditable);
        mainApp.directive('selectable', selectable);
        mainApp.factory('shared', function() {
            return shared;
        });

        var app = new MonitoringApp(mainApp, modelDescriptorV3, panels);
        shared.modelManager = app.modelManager;

        var gameManager = new GameManager(shared.modelManager);

        window.console.log("-->");
        window.console.log(shared.modelManager.getCompleteModel());
    });
});

