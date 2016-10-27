/**
 * Created by Christophe on 07/09/2016.
 */
var panels = {
    sets: {
        start: {
            template: "includes/start.html",
            title: "Set de panneaux 1",
            css: "test-set1",
            buttons: {
                b1: {
                    label: "Global",
                    containerid: "b1",
                    action: {
                        type: "navigatetopanel",
                        panelid: "global"
                    }
                },
                b2: {
                    label: "Files",
                    containerid: "b2",
                    action: {
                        type: "navigatetopanel",
                        panelid: "files"
                    }
                },
                b3: {
                    label: "Sprites",
                    containerid: "b3",
                    action: {
                        type: "navigatetopanel",
                        panelid: "sprites"
                    }
                },
                b4: {
                    label: "Sprites Logic",
                    containerid: "b4",
                    action: {
                        type: "navigatetopanel",
                        panelid: "spriteslogic"
                    }
                },
                b5: {
                    label: "Game Logic",
                    containerid: "b5",
                    action: {
                        type: "navigatetopanel",
                        panelid: "logical"
                    }
                },
                b6: {
                    label: "Sound",
                    containerid: "b6",
                    action: {
                        type: "navigatetopanel",
                        panelid: "sound"
                    }
                },
                b7: {
                    label: "Graphs",
                    containerid: "b7",
                    action: {
                        type: "navigatetopanel",
                        panelid: "graphs"
                    }
                },
                b8: {
                    label: "Scene editor",
                    containerid: "b8",
                    action: {
                        type: "navigatetopanel",
                        panelid: "sceneeditor"
                    }
                },
                b9: {
                    label: "Graph editor",
                    containerid: "b9",
                    action: {
                        type: "navigatetopanel",
                        panelid: "grapheditor"
                    }
                }
            }
        },
        global: {
            template: "includes/layout-1-2.html",
            panels: {
                package: {
                    name: "Packages",
                    type: "Package",
                    containerid: "b1"
                },
                modules: {
                    name: "Modules",
                    type: "Module",
                    containerid: "b2"
                }
            }
        },
        files: {
            template: "includes/layout-2-3.html",
            panels: {
                spritefilereference: {
                    name: "Sprite files",
                    type: "SpriteFileReference",
                    containerid: "b1"
                },
                backgroundfilereference: {
                    name: "Background files",
                    type: "BackgroundFileReference",
                    containerid: "b2"
                },
                foregroundfilereference: {
                    name: "Foreground files",
                    type: "ForegroundFileReference",
                    containerid: "b3"
                },
                controlfilereference: {
                    name: "Control sprite files",
                    type: "ControlFileReference",
                    containerid: "b4"
                },
                soundfilereference: {
                    name: "Sound Files",
                    type: "SoundFileReference",
                    containerid: "b5"
                }
            }
        },
        sprites: {
            template: "includes/layout-2-2.html",
            panels: {
                sprites: {
                    name: "Sprites",
                    type: "Sprite",
                    containerid: "b1"
                },
                controlsprites: {
                    name: "Control Sprites",
                    type: "ControlSprite",
                    containerid: "b2"
                },
                backgroundsprites: {
                    name: "Background Sprites",
                    type: "BackgroundSprite",
                    containerid: "b3"
                },
                foregroundsprites: {
                    name: "Foreground Sprites",
                    type: "ForegroundSprite",
                    containerid: "b4"
                }
            }
        },
        spriteslogic: {
            template: "includes/layout-2-3.html",
            panels: {
                spritesgroup: {
                    name: "Sprite Groups",
                    type: "SpritesGroup",
                    containerid: "b1"
                },
                groupstate: {
                    name: "Group States",
                    type: "GroupState",
                    containerid: "b2"
                },
                sequence: {
                    name: "Sequences",
                    type: "Sequence",
                    containerid: "b3"
                },
                conditionalgroupstate: {
                    name: "Conditional Group States",
                    type: "ConditionalGroupState",
                    containerid: "b4"
                },
                conditionalgroupstatesset: {
                    name: "Conditional Group States Sets",
                    type: "ConditionalGroupStateSet",
                    containerid: "b5"
                },
                animations: {
                    name: "Animations",
                    type: "Animation",
                    containerid: "b6"
                }
            }
        },
        logical: {
            template: "includes/layout-2-3.html",
            panels: {
                variable: {
                    name: "Variables",
                    type: "Variable",
                    containerid: "b1"
                },
                condition: {
                    name: "Conditions",
                    type: "Condition",
                    containerid: "b2"
                },
                control: {
                    name: "Controls",
                    type: "Control",
                    containerid: "b3"
                },
                trigger: {
                    name: "Triggers",
                    type: "Trigger",
                    containerid: "b4"
                },
                action: {
                    name: "Actions",
                    type: "Action",
                    containerid: "b5"
                },
                clock: {
                    name: "Clocks",
                    type: "Clock",
                    containerid: "b6"
                }
            }
        },
        sound: {
            template: "includes/layout-1-1.html",
            panels: {
                sound: {
                    name: "Sounds",
                    type: "Sound",
                    containerid: "b1"
                }
            }
        },
        graphs: {
            template: "includes/layout-1-3.html",
            panels: {
                graphs: {
                    name: "Graphs",
                    type: "Graph",
                    containerid: "b1"
                },
                nodes: {
                    name: "Nodes",
                    type: "GraphNode",
                    containerid: "b2"
                },
                links: {
                    name: "Links",
                    type: "GraphLink",
                    containerid: "b3"
                }
            }
        },
        play: {
            template: "includes/layout-1.html",
            title: "Set de panneaux 1",
            css: "test-set1",
            panels: {
                panel1: {
                    name: "Panneau d'édition",
                    type: "Sprite",
                    containerid: "b1",
                    css: "test-panel1",
                    template: "includes/spritespanel.html",
                    controller: "spritespanelcontroller"
                }
            }
        },
    },
    defaultset: "start"
};