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
        currentspellsperday: {
            0: {
                type: Number,
                default: 0
            },
            1: {
                type: Number,
                default: 0
            },
            2: {
                type: Number,
                default: 0
            },
            3: {
                type: Number,
                default: 0
            },
            4: {
                type: Number,
                default: 0
            },
            5: {
                type: Number,
                default: 0
            },
            6: {
                type: Number,
                default: 0
            },
            7: {
                type: Number,
                default: 0
            },
            8: {
                type: Number,
                default: 0
            },
            9: {
                type: Number,
                default: 0
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

/* 

but in general, you can use post(‘init) hook

​[2:42] 
and post (‘save)

​[2:42] 
like, combo between those two

​[2:42] 
also, post(‘init’ is a hook that gets fired after you load the data

Seema Ullal [2:42 PM] 
I haven’t used this but https://github.com/emirotin/mongodb-migrations

GitHub
emirotin/mongodb-migrations
mongodb-migrations - A Node.js migration framework for MongoDB

Christian Sakai [2:43 PM] 
User.findOne({ name: ‘myself })

​[2:43] 
post.init will fire after that document { name: ‘myself’ } is loaded

​[2:43] 
in thispost init

​[2:43] 
you can

​[2:44] 
 ```post('init', function(loadedDoc) {
   this. _original = loadedDoc.toObject(); // or to JSON, or etc
   
});
```
(edited)

​[2:45] 
but you have to fire the hooks, post init and pre save

​[2:45] 
so you cant do something like

​[2:45] 
User.findOneAndUpdate

​[2:46] 
because post init doesn’t get fired in by using that method

​[2:46] 
neither does pre.save

​[2:46] 
so its kinda weird, you have to do explicitly

​[2:46] 
User.findOne()….bla bla bla nd then user.save()

James Nissenbaum [2:46 PM] 
thats...annoying

Christian Sakai [2:47 PM] 
because, findOneAndUpdate by mongoose directly calls mongodb driver, so there is no hook need to be fired

James Nissenbaum [2:47 PM] 
how do i compare the previous schema to the current schema? Or should i just try to update it every time?

Christian Sakai [2:47 PM] 
where as, findOne and user.save is a syntatic sugar method implemented by mongoose, so they can put hooks there

​[2:47] 
basically

​[2:47] 
probably soemthing like this

​[2:49] 
 ```User.post('init', function(docLoaded) {
  this._original = docLoaded.toObject();
});

User.pre('save', function() {
  if (this._original === this.toObject()) {
    // do my thing
  }
});
```

​[2:49] 
something like that

​[2:49] 
on the comparison, obviously you have to implement your own comparison method

James Nissenbaum [2:49 PM] 
right

Christian Sakai [2:50 PM] 
maybe lodash can help doing an object deepEqual comparison to see what changed

​[2:50] 
just remember the catch is, you have to do User.find and then user.save instead of User.findOneAndUpdate
*/