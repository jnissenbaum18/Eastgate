'use strict';
var mongoose = require('mongoose');
var Promise = require('bluebird')
var User = mongoose.model('User')

var setSkill = function () {
    var obj = {
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
            type: Number,
            default: 0
        }
    }
    return obj
}

var schema = new mongoose.Schema({

    characterstats: {
        name: {
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
        intelligence: {
            type: Number
        },
        wisdom: {
            type: Number
        },
        charisma: {
            type: Number
        }
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
        },
        skillpointsperlevel: {
            type: Number
        }
    },
    skills: {
        alchemy: setSkill(),
        animalempathy: setSkill(),
        appraise: setSkill(),
        autohypnosis: setSkill(),
        balance: setSkill(),
        bluff: setSkill(),
        climb: setSkill(),
        concentration: setSkill(),
        controlshape: setSkill(),
        craft: setSkill(),
        decipherscript: setSkill(),
        diplomacy: setSkill(),
        disabledevice: setSkill(),
        disguise: setSkill(),
        escapeartist: setSkill(),
        forgery: setSkill(),
        gatherinformation: setSkill(),
        handleanimal: setSkill(),
        heal: setSkill(),
        hide: setSkill(),
        iaijutsufocus: setSkill(),
        innuendo: setSkill(),
        intimidate: setSkill(),
        intuitdirection: setSkill(),
        jump: setSkill(),
        knowledge: {
            base: setSkill(),
            arcana: setSkill(),
            architectureandengineering: setSkill(),
            barbarianlore: setSkill(),
            codeofmartialhonor: setSkill(),
            dungeoneering: setSkill(),
            geography: setSkill(),
            history: setSkill(),
            law: setSkill(),
            local: setSkill(),
            nature: setSkill(),
            nobilityandroyalty: setSkill(),
            psionics: setSkill(),
            religion: setSkill(),
            shadowlands: setSkill(),
            spirits: setSkill(),
            tactics: setSkill(),
            theplanes: setSkill(),
            war: setSkill(),
            weaponry: setSkill(),
        },
        listen: setSkill(),
        luciddreaming: setSkill(),
        martiallore: setSkill(),
        movesilently: setSkill(),
        openlock: setSkill(),
        perform: setSkill(),
        pickpocket: setSkill(),
        profession: setSkill(),
        psicraft: setSkill(),
        readlips: setSkill(),
        remoteview: setSkill(),
        ride: setSkill(),
        scry: setSkill(),
        search: setSkill(),
        sensemotive: setSkill(),
        sleightofhand: setSkill(),
        speaklanguage: setSkill(),
        spot: setSkill(),
        survival: setSkill(),
        swim: setSkill(),
        truespeak: setSkill(),
        tumble: setSkill(),
        usemagicdevice: setSkill(),
        usepsionicdevice: setSkill(),
        userope: setSkill(),
        wildernesslore: setSkill()
    },
    attacks: [{
    }],
    protectiveitems: [{
    }],
    inventory: [{
    }],
    feats: [{
    }],
    specialabilities: [{
    }],
    classfeatures: [{
    }],
    spells: {
        level: {
            0: [{
            }],
            1: [{
            }],
            2: [{
            }],
            3: [{
            }],
            4: [{
            }],
            5: [{
            }],
            6: [{
            }],
            7: [{
            }],
            8: [{
            }],
            9: [{
            }]
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
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            conjuration: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            divination: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            enchantment: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            evocation: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            illusion: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            necromancy: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            transmutation: {
                speciality: {
                    type: Boolean,
                    default: false
                },
                prohibited: {
                    type: Boolean,
                    default: false
                }
            },
            universal: {
                type: String,
                default: ''
            },
            other: {
                type: String,
                default: ''
            },
        }
    },
    miscstats: {
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

schema.methods.removal = function () {
    var self = this
    return new Promise(function (resolve, reject) {
        resolve(
            User.findOne({
                characters: {
                    $in: [self._id]
                }
            }).exec()
            .then(function (user) {
                user.characters.pull(self._id);
                return new Promise(function (resolve, reject) {
                    resolve(user.save());
                })
            })
            .then(function(){
                return mongoose.model('Character').remove({_id: self._id}).exec();
            })
            .then(function(){
                return;
            })
        )
    })
}

mongoose.model('Character', schema);