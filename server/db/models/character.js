'use strict';
var mongoose = require('mongoose');
var Promise = require('bluebird')
var User = mongoose.model('User')

var schema = new mongoose.Schema({

    characterstats: {
        name: {
            type: String
        },
        classarray: [{
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
        charactersize: {
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
            score: {
                type: Number
            },
            misc: {
                type: Number
            }, 
            temp: {
                type: Number
            }
        },
        dexterity: {
            score: {
                type: Number
            },
            misc: {
                type: Number
            }, 
            temp: {
                type: Number
            }
        },
        constitution: {
            score: {
                type: Number
            },
            misc: {
                type: Number
            }, 
            temp: {
                type: Number
            }
        },
        intelligence: {
            score: {
                type: Number
            },
            misc: {
                type: Number
            }, 
            temp: {
                type: Number
            }
        },
        wisdom: {
            score: {
                type: Number
            },
            misc: {
                type: Number
            }, 
            temp: {
                type: Number
            }
        },
        charisma: {
            score: {
                type: Number
            },
            misc: {
                type: Number
            }, 
            temp: {
                type: Number
            }
        }
    },
    combatstats: {
        maxhitpoints: {
            type: Number
        },
        currenthitpoints: {
            type: Number
        },
        nonlethal: {
            type: Number,
            default: 0
        },
        speed: {
            type: Number,
            default: 0
        },
        experience: {
            type: Number
        },
        baseattackbonus: {
            type: Number
        }, 
        initiative: {
            type: Number
        },
        saves: {
            fortitude: {
                fortitudebase: {
                    type: Number
                },
                fortitudemagic: {
                    type: Number
                }, 
                fortitudemisc: {
                    type: Number
                },
                fortitudetemp: {
                    type: Number
                }      
            },
            reflex: {
                reflexbase: {
                    type: Number
                },
                reflexmagic: {
                    type: Number
                }, 
                reflexmisc: {
                    type: Number
                },
                reflextemp: {
                    type: Number
                } 
            },
            will: {
                willbase: {
                    type: Number
                },
                willmagic: {
                    type: Number
                }, 
                willmisc: {
                    type: Number
                },
                willtemp: {
                    type: Number
                } 
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
        },
        miscarmorclassbonus: {
            type: Number
        },
        deflectionmodifier: {
            type: Number,
            default: 0
        },
        naturalarmor: {
            type: Number,
            default: 0
        },
        miscgrapplebonus: {
            type: Number
        }
    },
    skills: [{
    }],
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
        relevantability: {
            type: String
        },
        spellsperday: {
            0: {
                type: Number
            },
            1: {
                type: Number
            },
            2: {
                type: Number
            },
            3: {
                type: Number
            },
            4: {
                type: Number
            },
            5: {
                type: Number
            },
            6: {
                type: Number
            },
            7: {
                type: Number
            },
            8: {
                type: Number
            },
            9: {
                type: Number
            }
        },
        schools: {
            specialty: {
                type: String
            }, 
            prohibited: {
                type: String
            }
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
    },
    notes: {
        type: String,
        default: ''
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