'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    playerstats: {
        name: {
            type: String
        },
        player: {
            type: String
        },
        class: [{
            name: String,
            level: Number
        }],
        race: {
            type: String  
        },
        subtype: {
            type: String
        },
        deity: {
            type: String
        },
        alignment: {
            type: String
        },
        size: {
            type: String
        },
        age: {
            type: Number
        },
        gender: {
            type: String
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        eyes: {
            type: String
        },
        hair: {
            type: String
        },
        skin: {
            type: String
        }
    },
    abilityscores: {
        strength: {
            type: Number
        },
        dexterity: {
            type: Number
        },
        constitution: {
            type: Number
        },
        Intelligence: {
            type: Number
        },
        Wisdom: {
            type: Number
        },
        Charisma: {
            type: Number
        },
    },
    combatstats: {
        maxhitpoints: {
            type: Number
        },
        experience: {
            type: Number
        },
        baseattackbonus: {
            type: Number
        }, 
        basesaves: {
            fortitude: {
                type: Number
            },
            reflex: {
                type: Number
            },
            will: {
                type: Number
            }
        },
        damagereduction: {
            type: Number
        }, 
        spellresistance: {
            type: Number
        }
    },
    skills: {
        totalpoints: {
            type: Number
        },
        alchemy: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        animalempathy: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            },
        },
        appraise: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        autohypnosis: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        balance: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        bluff: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        climb: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        concentration: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        controlshape: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        craft: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        decipherscript: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        diplomacy: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        disabledevice: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        disguise: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        escapeartist: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        forgery: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        gatherinformation: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        handleanimal: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        heal: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        hide: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        iaijutsufocus: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        innuendo: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        intimidate: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        intuitdirection: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        jump: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        knowledge: {
            base: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            arcana: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            architectureandengineering: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            barbarianlore: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            codeofmartialhonor: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            dungeoneering: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            geography: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            history: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            law: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            local: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            nature: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            nobilityandroyalty: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            psionics: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            religion: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            shadowlands: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            spirits: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            tactics: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            theplanes: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            war: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
            weaponry: {
                inclass: {
                    type: Boolean
                },
                crossclass: {
                    type: Boolean
                },
                trainedonly: {
                    type: Boolean,
                    default: true
                },
                armorcheckpenalty: {
                    type: Boolean,
                    default: false
                },
                ranks: {
                    type: Number
                }
            },
        },
        listen: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        luciddreaming: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        martiallore: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        movesilently: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        openlock: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        perform: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        pickpocket: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        profession: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        psicraft: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        readlips: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        remoteview: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        ride: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        scry: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        search: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        sensemotive: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        sleightofhand: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        speaklanguage: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        spot: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        survival: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        swim: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: false
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        truespeak: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        tumble: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: true
            },
            ranks: {
                type: Number
            }
        },
        usemagicdevice: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        usepsionicdevice: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        userope: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        },
        wildernesslore: {
            inclass: {
                type: Boolean,
                default: false
            },
            crossclass: {
                type: Boolean,
                default: false
            },
            trainedonly: {
                type: Boolean,
                default: true
            },
            armorcheckpenalty: {
                type: Boolean,
                default: false
            },
            ranks: {
                type: Number
            }
        }
    },
    attacks: [{
        name: {
            type: String
        },
        damage: {
            type: String
        },
        critical: {
            type: String
        },
        range: {
            type: Number
        },
        type: {
            type: String
        },
        twohanded: {
            type: Boolean
        },
        specialqualities: [{
            name: {
                type: String
            },
            modifier: {
                type: Number
            },
            description: {
                type: String
            }
        }],
        notes: {
            type: String
        }
    }],
    armorandprotectiveitems: [{
        name: {
            type: String
        },
        type: {
            type: String
        },
        armorclassbonus: {
            type: Number
        },
        maximumdexterity: {
            type: Number
        },
        armorcheckpenalty: {
            type: Number
        },
        spellfailure: {
            type: Number
        },
        speed: {
            type: Number
        },
        weight: {
            type: Number
        },
        specialproperties: [{
            name: {
                type: String
            },
            modifier: {
                type: Number
            },
            description: {
                type: String
            }
        }],
        notes: {
            type: String
        }
    }],
    inventory: [{
        name: {
            type: String
        },
        page: {
            type: String
        },
        weight: {
            type: Number
        },
        quantity: {
            type: Number
        },
        description: {
            type: String
        }
    }],
    feats: [{
        name: {
            type: String
        },
        description: {
            type: String
        },
        reference: {
            book: {
                type: String
            },
            page: {
                type: Number
            }
        }
    }],
    specialabilities: [{
        name: {
            type: String
        },
        description: {
            type: String
        },
        reference: {
            book: {
                type: String
            },
            page: {
                type: Number
            }
        }
    }],
    classfeatures: [{
        name: {
            type: String
        },
        description: {
            type: String
        },
        reference: {
            book: {
                type: String
            },
            page: {
                type: Number
            }
        }
    }],
    spellsandinfusions: {
        level: {
            0: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            1: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            2: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            3: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            4: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            5: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            6: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            7: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            8: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
            9: [{
                name: {
                    type: String
                },
                school: {
                    type: String
                },
                type: {
                    type: String
                },
                components: {
                    v: {
                        type: Boolean,
                        default: true
                    },
                    s: {
                        type: Boolean,
                        default: true
                    },
                    m: {
                        type: Boolean,
                        default: true
                    }
                },
                castingtime: {
                    type: Number
                },
                range: {
                    type: Number
                },
                area: {
                    type: String
                },
                duration: {
                    type: String
                },
                savingthrow: [{
                    type: String
                }],
                spellresistance: {
                    type: Boolean
                },
                description: {
                    type: String
                }
            }],
        },
        spellsave: {
            type: Number
        },
        arcanespellfailure: {
            type: Number
        },
        schools: {
            abjuration: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            conjuration: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            divination: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            enchantment: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            evocation: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            illusion: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            necromancy: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            transmutation: {
                speciality: {
                    type: Boolean
                },
                prohibited: {
                    type: Boolean
                }
            },
            universal: {
                type: String
            },
            other: {
                type: String
            },
        }
    },
    miscellaneousstats: {
        racialtraits: [{
            name: {
                type: String
            },
            description: {
                type: String
            },
            modifiers: [{
                attribute: {
                    type: String
                },
                modifier: {
                    type: Number
                }
            }]
        }],
        languages: [{
            type: String
        }],
        reigonoforigin: {
            type: String
        },
        affiliationsandenemies: [{
            name: {
                type: String
            },
            description: {
                type: String
            }
        }]
    }
});

mongoose.model('Character', schema);