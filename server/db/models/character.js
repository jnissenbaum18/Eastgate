'use strict';
var mongoose = require('mongoose');
var Promise = require('bluebird')
var User = mongoose.model('User')

// var setSkill = function () {
//     var obj = {
//         inclass: {
//             type: false
//         },
//         crossclass: {
//             type: false
//         },
//         trainedonly: {
//             type: true
//         },
//         armorcheckpenalty: {
//             type: false
//         },
//         ranks: {
//             type: Number
//         }
//     }
//     return obj
// }

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
        }
    },
    skills: {
        totalpoints: {
            type: Number
        },
        pointsperlevel: {
            type: Number
        },
        alchemy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        animalempathy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        appraise: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        autohypnosis: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        balance: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        bluff: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        climb: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        concentration: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        controlshape: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        craft: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        decipherscript: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        diplomacy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        disabledevice: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        disguise: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        escapeartist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        forgery: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        gatherinformation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        handleanimal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        heal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        hide: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        iaijutsufocus: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        innuendo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        intimidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        intuitdirection: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        jump: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        knowledge: {
            base: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            arcana: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            architectureandengineering: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            barbarianlore: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            codeofmartialhonor: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            dungeoneering: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            geography: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            history: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            law: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            local: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            nature: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            nobilityandroyalty: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            psionics: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            religion: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            shadowlands: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            spirits: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            tactics: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            theplanes: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            war: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
            weaponry: {
                type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            },
        },
        listen: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        luciddreaming: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        martiallore: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        movesilently: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        openlock: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        perform: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        pickpocket: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        profession: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        psicraft: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        readlips: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        remoteview: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        ride: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        scry: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        search: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        sensemotive: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        sleightofhand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        speaklanguage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        spot: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        survival: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        swim: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        truespeak: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        tumble: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
        usemagicdevice: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        usepsionicdevice: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        userope: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        wildernesslore: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    },
    attacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attack'
    }],
    protectiveitems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Protectiveitem'
    }],
    inventory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventoryitem'
    }],
    feats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feat'
    }],
    specialabilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialability'
    }],
    classfeatures: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classfeature'
    }],
    spells: {
        level: {
            0: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            1: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            2: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            3: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            4: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            5: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            6: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            7: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            8: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
            }],
            9: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Spell'
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