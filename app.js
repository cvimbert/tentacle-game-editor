/**
 * Created by Christophe on 05/09/2016.
 */

//$(document).ready(function() {

    define([
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
        "sortablelistdirective",
        "toolbarpanelcontroller",
        "console",
        "contenteditable",
        "selectable",

        "directives/grapheditor/bundle",
        "directives/grapheditor/satellite",
        "directives/sceneeditor/scrollingtab",
        "directives/sceneeditor/scrollingtabstitle",
        "directives/sceneeditor/tabsscroller",

        "sceneeditor",
        "grapheditor",

        "actions/actionsset",
        "actions/baseaction",
        "actions/clockaction",
        "actions/groupaction",
        "actions/randomaction",
        "actions/sequenceaction",
        "actions/spriteaction",
        "actions/triggeraction",
        "actions/variableaction",
        "actions/controlaction",
        "actions/soundaction",
        "actions/actionsaction",
        "actions/animationaction",
        "conditions/basecondition",
        "conditions/variablecondition",
        "conditions/sequencecondition",
        "triggers/basetrigger",
        "triggers/clockperiod",
        "triggers/controlclick",
        "triggers/gameevent",
        "triggers/spritescollision",
        "triggers/timeout",
        "triggers/sequencetrigger",
        "triggers/spritetrigger",
        "triggers/variabletrigger",
        "triggers/animationtrigger"
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
        sortableListDirective,
        toolbarPanelController,
        console,
        contentEditable,
        selectable,

        bundleDirective,
        satelliteDirective,
        scrollingTabDirective,
        scrollingTabsTitleDirective,
        tabScrollerDirective,

        sceneEditorController,
        graphEditorController
    ) {

        var shared = {};

        var mainApp = angular.module("monitoring-panel", ['ngRoute', 'ngSanitize']);
        mainApp.factory('shared', function() {
            return shared;
        });
        mainApp.controller("modelmonitorcontroller", modelMonitorController);
        mainApp.controller("panelcontroller", panelController);

        mainApp.controller("spritespanelcontroller", spritesPanelController);
        mainApp.controller("toolbarpanelcontroller", toolbarPanelController);
        mainApp.controller("consolecontroller", console);

        mainApp.controller("panelscontroller", panelsController);

        mainApp.controller("sceneeditor", sceneEditorController);
        mainApp.controller("grapheditor", graphEditorController);


        mainApp.directive('draggable', draggableDirective);
        mainApp.directive("sortablelist", ['$timeout', sortableListDirective]);
        mainApp.directive('contenteditable', contentEditable);
        mainApp.directive('selectable', selectable);
        mainApp.directive('displayboolean', displayObjectDirective);
        mainApp.directive('control', controlDirective);

        // graph editor
        mainApp.directive("bundle", ['$timeout', bundleDirective]);
        mainApp.directive("satellite", satelliteDirective);

        // sceneeditor
        mainApp.directive("tabsscroller", tabScrollerDirective);
        mainApp.directive("scrollingtabstitle", scrollingTabsTitleDirective);
        mainApp.directive("scrollingtab", ['$timeout', scrollingTabDirective]);


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
//});