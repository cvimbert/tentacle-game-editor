
var modelDescriptorV3 = {
    //Objects

    Animation: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "Animation name",
                required: true
            },
            sequence: {
                type: "reference",
                referencetype: "Sequence",
                required: true
            },
            iterations: {
                type: "number",
                defaultvalue: 1,
                required: true
            },
            period: {
                type: "number",
                defaultvalue: 1,
                required: true
            },
            interruptable: {
                type: "boolean",
                defaultvalue: "true",
                required: true
            }
        }
    },
    Module: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "Modules name",
                required: true
            },
            identifier: {
                type: "string",
                defaultvalue: "Module id",
                required: true
            }
        }
    },
    Sequence: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "sequencename",
                required: true
            },
            spritesgroup: {
                type: "reference",
                referencetype: "SpritesGroup",
                required: true
            },
            looptype: {
                type: "include",
                includetype: "LoopType",
                required: false
            },
            states: {
                type: "collection",
                collectiontype: "reference",
                //referencetype: ["GroupState", "ConditionalGroupStateSet"],
                filtered: false,
                referencetype: "GroupState",
                required: true
            }
        }
    },
    GroupState: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "groupstatename",
                required: true
            },
            group: {
                type: "reference",
                referencetype: "SpritesGroup",
                required: true
            },
            sprites: {
                type: "collection",
                collectiontype: "reference",
                referencetype: "linkedcollection",
                linkedcollectionattribute: "group",
                linkedcollectionattributevalue: "sprites",
                required: true
            }
        }
    },
    Action: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "actionname",
                required: true
            },
            condition: {
                type: "reference",
                referencetype: "Condition",
                required: false
            },
            actiontype: {
                type: "ConditionalAttributesSet",
                required: true,
                attributesSets: {
                    actionsset: {
                        actions: {
                            type: "collection",
                            collectiontype: "reference",
                            referencetype: "Action",
                            required: true
                        }
                    },
                    soundaction: {
                        sound: {
                            type: "reference",
                            referencetype: "Sound",
                            required: true
                        },
                        sndaction: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                play: {}
                            }
                        }
                    },
                    controlaction: {
                        control: {
                            type: "reference",
                            referencetype: "Control",
                            required: true
                        },
                        ctaction: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                disable: {},
                                enable: {}
                            }
                        }
                    },
                    triggeraction: {
                        trigger: {
                            type: "reference",
                            referencetype:"Trigger",
                            required: true
                        },
                        taction: {
                            type: "include",
                            includetype: "Enable",
                            required: true
                        }
                    },
                    spriteaction: {
                        sprite: {
                            type: "reference",
                            referencetype: "Sprite",
                            required: true
                        },
                        saction: {
                            type: "include",
                            includetype: "ShowHide",
                            required: true
                        }
                    },
                    sequenceaction: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        saction: {
                            type: "include",
                            includetype: "SequenceAction",
                            required: true
                        }
                    },
                    groupaction: {
                        sprite: {
                            type: "reference",
                            referencetype: "Group",
                            required: true
                        },
                        gaction: {
                            type: "include",
                            includetype: "ShowHide",
                            required: true
                        }
                    },
                    clockaction: {
                        clock: {
                            type: "reference",
                            referencetype: "Clock",
                            required: true
                        },
                        caction: {
                            type: "include",
                            includetype: "StartStop",
                            required: true
                        }
                    },
                    variableaction: {
                        variable: {
                            type: "reference",
                            referencetype: "Variable",
                            required: true
                        },
                        vaction: {
                            type: "include",
                            includetype: "VariableAction"
                        }
                    },
                    randomaction: {
                        actions: {
                            type: "collection",
                            collectiontype: "reference",
                            referencetype: "Action",
                            required: true
                        },
                        randmode: {
                            type: "include",
                            includetype: "RandMode"
                        }
                    }
                }
            }
        }
    },
    Trigger: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "groupstatename",
                required: true
            },
            actions: {
                type: "collection",
                collectiontype: "reference",
                referencetype: "Action"
                //required: true
            },
            condition: {
                type: "reference",
                referencetype: "Condition",
                required: false
            },
            activatedonstart: {
                type: "boolean",
                defaultvalue: false,
                required: true
            },
            triggertype: {
                type: "ConditionalAttributesSet",
                required: true,
                attributesSets: {
                    variabletrigger: {
                        variable: {
                            type: "reference",
                            referencetype: "Variable",
                            required: true
                        },
                        eventtype: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                change: {}
                            }
                        }
                    },
                    spritetrigger: {
                        sprite: {
                            type: "reference",
                            referencetype: "Sprite",
                            required: true
                        },
                        eventtype: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                collision: {
                                    collisionsprite: {
                                        type: "reference",
                                        referencetype: "Sprite",
                                        required: true
                                    }
                                }
                            }
                        }
                    },
                    sequencetrigger: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        eventtype: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                enterstate: {
                                    state: {
                                        type: "reference",
                                        referencetype: "linkedcollection",
                                        linkedcollectionattribute: "sequence",
                                        linkedcollectionattributevalue: "states",
                                        required: true
                                    }
                                },
                                iterationend: {},
                                animationend: {}
                            }
                        }
                    },
                    clockperiod: {
                        clock: {
                            type: "reference",
                            referencetype: "Clock",
                            required: true
                        }
                    },
                    timeout: {
                        time: {
                            type: "number",
                            defaultvalue: 1,
                            required: true
                        }
                    },
                    controlclick: {
                        control: {
                            type: "reference",
                            referencetype: "Control",
                            required: true
                        },
                        eventtype: {
                            type: "include",
                            includetype: "ClickEventType",
                            required: true
                        }
                    },
                    gameevent: {
                        eventname: {
                            type: "include",
                            includetype: "GameEventName",
                            required: true
                        }
                    }
                }
            }
        }
    },
    Package: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "packagename",
                required: true
            },
            identifier: {
                type: "string",
                defaultvalue: "identifier",
                required: true
            }
        }
    },
    SoundFileReference: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "soundfilename",
                required: true
            },
            file: {
                type: "string",
                required: true
            },
            package: {
                type: "reference",
                referencetype: "Package",
                required: true
            }
        }
    },
    Clock: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "clockname",
                required: true
            },
            period: {
                type: "number",
                defaultvalue: 1,
                required: true
            }
        }
    },
    SpriteFileReference: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "spritefilename",
                required: true
            },
            file: {
                type: "string",
                required: true
            },
            package: {
                type: "reference",
                referencetype: "Package",
                required: true
            }
        }
    },
    DecorationFileReference: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "decorationfilename",
                required: true
            },
            file: {
                type: "string",
                required: true
            },
            package: {
                type: "reference",
                referencetype: "Package",
                required: true
            }
        }
    },
    ControlFileReference: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "controlfilename",
                required: true
            },
            file: {
                type: "string",
                required: true
            },
            package: {
                type: "reference",
                referencetype: "Package",
                required: true
            }
        }
    },
    BackgroundFileReference: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "controlfilename",
                required: true
            },
            file: {
                type: "string",
                required: true
            },
            package: {
                type: "reference",
                referencetype: "Package",
                required: true
            }
        }
    },
    ForegroundFileReference: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "controlfilename",
                required: true
            },
            file: {
                type: "string",
                required: true
            },
            package: {
                type: "reference",
                referencetype: "Package",
                required: true
            }
        }
    },
    Sprite: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "spritename",
                required: true
            },
            reference: {
                type: "reference",
                referencetype: "SpriteFileReference",
                required: true
            },
            x: {
                type: "number",
                defaultvalue: 0,
                required: true
            },
            y: {
                type: "number",
                defaultvalue: 0,
                required: true
            },
            scale: {
                type: "number",
                defaultvalue: 1,
                required: true
            }
        }
    },
    ControlSprite: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "controlspritename",
                required: true
            },
            reference: {
                type: "reference",
                referencetype: "ControlFileReference",
                required: true
            },
            x: {
                type: "number",
                required: true
            },
            y: {
                type: "number",
                required: true
            }
        }
    },
    BackgroundSprite: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "bacgroundspritename",
                required: true
            },
            reference: {
                type: "reference",
                referencetype: "BackgroundFileReference",
                required: true
            },
            x: {
                type: "number",
                required: true
            },
            y: {
                type: "number",
                required: true
            }
        }
    },
    ForegroundSprite: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "foregroundspritename",
                required: true
            },
            reference: {
                type: "reference",
                referencetype: "ForegroundFileReference",
                required: true
            },
            x: {
                type: "number",
                required: true
            },
            y: {
                type: "number",
                required: true
            }
        }
    },
    SpritesGroup: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "spritesgroupname",
                required: true
            },
            sprites: {
                type: "collection",
                collectiontype: "reference",
                referencetype: "Sprite",
                required: true
            }
        }
    },
    Graph: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "graphname",
                required: true
            },
            nodes: {
                type: "collection",
                collectiontype: "reference",
                referencetype: "GraphNode",
                required: true
            }
        }
    },
    GraphNode: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "graphnodename",
                required: true
            },
            state: {
                type: "reference",
                referencetype: ["GroupState", "ConditionalGroupStateSet"],
                required: true
            },
            links: {
                type: "collection",
                collectiontype: "reference",
                referencetype: "GraphLink",
                required: true
            }
        }
    },
    GraphLink: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "graphlinkname",
                required: true
            },
            destnode: {
                type: "reference",
                referencetype: "GraphNode",
                required: true
            },
            trigger: {
                type: "reference",
                referencetype: "Trigger",
                required: true
            }
        }
    },
    Variable: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "variablename",
                required: true
            },
            variabletype: {
                type: "ConditionalAttributesSet",
                required: true,
                attributesSets: {
                    string: {
                        value: {
                            type: "string",
                            defaultvalue: "value",
                            required: true
                        }
                    },
                    number: {
                        value: {
                            type: "number",
                            defaultvalue: 0,
                            required: true
                        }
                    },
                    boolean: {
                        value: {
                            type: "boolean",
                            defaultvalue: "false",
                            required: true
                        }
                    }
                }
            }
        }
    },
    Condition: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "conditionname",
                required: true
            },
            conditionobject: {
                type: "ConditionalAttributesSet",
                required: true,
                attributesSets: {
                    variablecondition: {
                        variable: {
                            type: "reference",
                            referencetype: "Variable",
                            required: true
                        },
                        operator: {
                            type: "include",
                            includetype: "ArithmeticOperator",
                            required: true
                        },
                        conditiontype: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                valuecomparison: {
                                    variablevalue: {
                                        type: "LinkedConditionalAttributesSet",
                                        linktype: "referenceattributevalue",
                                        linkedreference: "variable",
                                        linkedattribute: "variabletype",
                                        required: true,
                                        attributesSets: {
                                            string: {
                                                value: {
                                                    type: "string",
                                                    defaultvalue: "value",
                                                    required: true
                                                }
                                            },
                                            number: {
                                                value: {
                                                    type: "number",
                                                    defaultvalue: 0,
                                                    required: true
                                                }
                                            },
                                            boolean: {
                                                value: {
                                                    type: "boolean",
                                                    defaultvalue: "false",
                                                    required: true
                                                }
                                            }
                                        }
                                    }
                                },
                                variablecomparison: {
                                    operandvariable: {
                                        type: "reference",
                                        referencetype: "Variable",
                                        required: true
                                    }
                                }
                            }
                        }
                    },
                    sequencecondition: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        operator: {
                            type: "include",
                            includetype: "EqualityOperator",
                            required: true
                        },
                        conditiontype: {
                            type: "ConditionalAttributesSet",
                            required: true,
                            attributesSets: {
                                onstate: {
                                    state: {
                                        type: "reference",
                                        referencetype: "linkedcollection",
                                        linkedcollectionattribute: "sequence",
                                        linkedcollectionattributevalue: "states",
                                        required: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    Control: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "controlname",
                required: true
            },
            sprite: {
                type: "reference",
                referencetype: "ControlSprite",
                required: true
            },
            zoning: {
                type: "ConditionalAttributesSet",
                required: true,
                defaultvalue: "nozone",
                attributesSets: {
                    nozone: {},
                    haszone: {
                        x: {
                            type: "number",
                            required: true,
                            defaultvalue: 0
                        },
                        y: {
                            type: "number",
                            required: true,
                            defaultvalue: 0
                        },
                        width: {
                            type: "number",
                            required: true,
                            defaultvalue: 0
                        },
                        height: {
                            type: "number",
                            required: true,
                            defaultvalue: 0
                        }
                    }
                }
            }
        }
    },
    Sound: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "soundname",
                required: true
            },
            file: {
                type: "reference",
                referencetype: "SoundFileReference",
                required: true
            }
        }
    },
    ConditionalGroupStateSet: {
        referenceable: true,
        attributes: {
            name: {
                type: "string",
                defaultvalue: "conditionalgroupstatename",
                required: true
            },
            group: {
                type: "reference",
                referencetype: "SpritesGroup",
                required: true
            },
            conditionalstates: {
                type: "collection",
                collectiontype: "reference",
                referencetype: "ConditionalGroupState",
                required: true
            },
            defaultstate: {
                type: "reference",
                referencetype: "GroupState",
                required: true
            }
        }
    },
    // à partir d'ici, ce ne sont plus des objets complets
    ConditionalGroupState: {
        referenceable: true,
        attributes: {
            state: {
                type: "reference",
                referencetype: "GroupState",
                required: true
            },
            condition: {
                type: "reference",
                referencetype: "Condition",
                required: true
            }
        }
    },
    ArithmeticOperator: {
        type: "Enumeration",
        required: true,
        enumerationvalues: ["===", "!==", "<", ">", "<=", ">="]
    },
    EqualityOperator: {
        type: "Enumeration",
        required: true,
        enumerationvalues: ["===", "!=="]
    },
    LoopType: {
        type: "Enumeration",
        enumerationvalues: ["circle", "reset"]
    },
    RandMode: {
        type: "Enumeration",
        enumerationvalues: ["normal", "sequence"]
    },
    GameEventName: {
        type: "Enumeration",
        required: true,
        enumerationvalues: ["gamestart", "gameend"]
    },
    Enable: {
        type: "Enumeration",
        enumerationvalues: ["enable", "disable"]
    },
    ShowHide: {
        type: "Enumeration",
        enumerationvalues: ["show", "hide"]
    },
    StartStop: {
        type: "Enumeration",
        enumerationvalues: ["start", "stop"]
    },
    SequenceAction: {
        /*type: "Enumeration",
        enumerationvalues: ["reset", "next", "previous", "reverse"]*/
        type: "ConditionalAttributesSet",
        required: true,
        attributesSets: {
            reset: {},
            next: {},
            previous: {},
            reverse: {},
            updatecurrentstate: {},
            setstate: {
                state: {
                    type: "reference",
                    referencetype: "linkedcollection",
                    linkedcollectionattribute: "sequence",
                    linkedcollectionattributevalue: "states",
                    required: true
                }
            },
            play: {
                occurences: {
                    type: "number",
                    defaultvalue: 1,
                    required: true
                },
                period: {
                    type: "number",
                    defaultvalue: 0.5,
                    required: true
                },
                interruptable: {
                    type: "boolean",
                    defaultvalue: "true"
                }
            }
        }
    },
    ClickEventType: {
        type: "Enumeration",
        enumerationvalues: ["controldown", "controlup", "controlclick"]
    },
    VariableValue: {
        type: "ConditionalAttributesSet",
        required: true,
        attributesSets: {
            string: {
                stringvalue: {
                    type: "string",
                    defaultvalue: "value",
                    required: true
                }
            },
            number: {
                numbervalue: {
                    type: "number",
                    defaultvalue: 0,
                    required: true
                }
            },
            boolean: {
                booleanvalue: {
                    type: "boolean",
                    defaultvalue: "false",
                    required: true
                }
            }
        }
    },
    VariableAction: {
        type: "ConditionalAttributesSet",
        required: true,
        attributesSets: {
            set: {
                varvalue: {
                    type: "include",
                    includetype: "VariableValueByType",
                    required: true
                }
            },
            // ces deux dernières actions ne devraient être visible que si la variable est de type "number"
            increment: {},
            decrement: {}
        }
    },
    VariableValueByType: {
        type: "LinkedConditionalAttributesSet",
        linktype: "referenceattributevalue",
        linkedreference: "variable",
        linkedattribute: "variabletype",
        required: true,
        attributesSets: {
            string: {
                vvalue: {
                    type: "string",
                    defaultvalue: "value",
                    required: true
                }
            },
            number: {
                vvalue: {
                    type: "number",
                    defaultvalue: 0,
                    required: true
                }
            },
            boolean: {
                vvalue: {
                    type: "boolean",
                    defaultvalue: "false",
                    required: true
                }
            }
        }
    }

};