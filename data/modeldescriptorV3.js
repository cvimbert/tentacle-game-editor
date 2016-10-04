
var modelDescriptorV3 = {
    //Objects

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
                referencetype: "GroupState",
                required: true

                // ici il faudrait plutôt une liste filtrée d'éléments (par un autre attribut)

                /*type: "collection",
                collectiontype: "reference",
                referencetype: "linkedcollection",
                linkedcollectionattribute: "spritesgroup",
                linkedcollectionattributevalue: "sprites",
                required: true*/
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
                    nextloop: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
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
                    },
                    incvariable: {
                        variable: {
                            type: "reference",
                            referencetype: "Variable",
                            required: true
                        }
                    },
                    decvariable: {
                        variable: {
                            type: "reference",
                            referencetype: "Variable",
                            required: true
                        }
                    },
                    actions: {
                        actions: {
                            type: "collection",
                            collectiontype: "reference",
                            referencetype: "Action"
                        }
                    },
                    resetsequence: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        }
                    },
                    animiteration: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        period: {
                            type: "number",
                            required: true
                        },
                        iterations: {
                            type: "number",
                            required: true,
                            defaultvalue: 1
                        },
                        oncomplete: {
                            type: "reference",
                            referencetype: "Action",
                            required: false
                        },
                        oniteration: {
                            type: "reference",
                            referencetype: "Action",
                            required: false
                        },
                        onstep: {
                            type: "reference",
                            referencetype: "Action",
                            required: false
                        },
                        stepnumber: {
                            type: "number",
                            required: true
                        }
                    },
                    togglestart: {
                    },
                    wait: {
                        action: {
                            type: "reference",
                            referencetype: "Action",
                            required: true
                        },
                        time: {
                            type: "number",
                            required: true,
                            defaultvalue: 500
                        }
                    },
                    setsequencestep: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        step: {
                            type: "reference",
                            referencetype: "linkedcollection",
                            linkedcollectionattribute: "sequence",
                            linkedcollectionattributevalue: "states",
                            required: true
                        }
                    },
                    setgroupstate: {
                        state: {
                            type: "reference",
                            referencetype: "GroupState",
                            required: true
                        },
                        grouprefresh: {
                            type: "boolean",
                            required: true
                        }
                    },
                    disabletrigger: {
                        trigger: {
                            type: "reference",
                            referencetype: "Trigger",
                            required: true
                        }
                    },
                    enabletrigger: {
                        trigger: {
                            type: "reference",
                            referencetype: "Trigger",
                            required: true
                        }
                    },
                    disablecontrol: {
                        control: {
                            type: "reference",
                            referencetype: "Control",
                            required: true
                        }
                    },
                    enablecontrol: {
                        control: {
                            type: "reference",
                            referencetype: "Control",
                            required: true
                        }
                    },
                    enablecontrols: {
                    },
                    disablecontrols: {
                    },
                    playsound: {
                        sound: {
                            type: "reference",
                            referencetype: "Sound",
                            required: true
                        }
                    },
                    cadencyup: {
                        factor: {
                            type: "number",
                            required: true,
                            defaultvalue: 0.05
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
                                }
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
                    },
                    sequencestepleave: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        step: {
                            type: "reference",
                            referencetype: "linkedcollection",
                            linkedcollectionattribute: "sequence",
                            linkedcollectionattributevalue: "states",
                            required: true
                        }
                    },
                    sequencestepenter: {
                        sequence: {
                            type: "reference",
                            referencetype: "Sequence",
                            required: true
                        },
                        step: {
                            type: "reference",
                            referencetype: "linkedcollection",
                            linkedcollectionattribute: "sequence",
                            linkedcollectionattributevalue: "states",
                            required: true
                        }
                    },
                    spritescollision: {
                        sprite1: {
                            type: "reference",
                            referencetype: "Sprite",
                            required: true
                        },
                        sprite2: {
                            type: "reference",
                            referencetype: "Sprite",
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
                    comparevariablewithvalue: {
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
                        variabletype: {
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
            setstate: {
                state: {
                    type: "reference",
                    referencetype: "linkedcollection",
                    linkedcollectionattribute: "sequence",
                    linkedcollectionattributevalue: "states",
                    required: true
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
            }
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