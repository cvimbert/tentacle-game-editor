/**
 * Created by Christophe on 05/09/2016.
 */

$(document).ready(function() {

    require([
        "controldirective",
        "displayobjectdirective",
        "gameconsole",
        "gamemanager",
        "monitoringapp",
        "modelmonitorcontroller",
        "panelcontroller",
        "panelscontroller",
        "spritespanelcontroller",
        "draggabledirective",
        "toolbarpanelcontroller",
        "console",
        "contenteditable",
        "selectable"
    ], function(
        controlDirective,
        displayObjectDirective,
        GameConsole,
        GameManager,
        MonitoringApp,
        modelMonitorController,
        panelController,
        panelsController,
        spritesPanelController,
        draggableDirective,
        toolbarPanelController,
        console,
        contentEditable,
        selectable
    ) {

        var shared = {};

        var mainApp = angular.module("monitoring-panel", ['ngRoute', 'ngSanitize']);
        mainApp.controller("modelmonitorcontroller", modelMonitorController);
        mainApp.controller("panelcontroller", panelController);
        mainApp.controller("panelscontroller", panelsController);
        mainApp.controller("spritespanelcontroller", spritesPanelController);
        mainApp.controller("toolbarpanelcontroller", toolbarPanelController);
        mainApp.controller("consolecontroller", console);
        mainApp.directive('draggable', draggableDirective);
        mainApp.directive('contenteditable', contentEditable);
        mainApp.directive('selectable', selectable);
        mainApp.directive('displayboolean', displayObjectDirective);
        mainApp.directive('control', controlDirective);
        mainApp.factory('shared', function() {
            return shared;
        });

        var app = new MonitoringApp(mainApp, modelDescriptorV3, panels, function() {
            shared.modelManager = app.modelManager;

            var gameConsole = new GameConsole();
            shared.gameConsole = gameConsole;

            var gameManager = new GameManager(app.modelManager, gameConsole);
            shared.gameManager = gameManager;
            gameManager.initialize();

            gameConsole.initialize(gameManager);
        });


    });
});

