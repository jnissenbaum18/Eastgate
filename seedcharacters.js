/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

Refer to the q documentation for why and how q.invoke is used.

*/

var mongoose = require('mongoose');
var connectToDb = require('./server/db');
var q = require('q');
var chalk = require('chalk');

var Character = mongoose.model('Character')

var getCurrentCharacterData = function () {
    return q.ninvoke(Character, 'find', {})
}

var seedCharacters = function () {

    var characters = {

        playerstats: {
            name: "Sir Addon Vance",
            player: "James Nissenbaum",
            class: [{
                name: "Fighter",
                level: 5
            },
            {
                name: "Mythic Exemplar",
                level: 7
            }],
            race: "Human",
            subtype: null,
            deity: null,
            alignment: "Lawful Good",
            size: "Medium",
            age: 30,
            gender: "Male",
            height: 77,
            weight: 270,
            eyes: "Brown",
            hair: "Black",
            skin: "Fair"
        },
        abilityscores: {
            strength: 20,
            dexterity: 14,
            constitution: 14,
            intelligence: 10,
            wisdom: 10,
            charisma: 15
        },
        combatstats: {
            maxhitpoints: 103,
            experience: 88076,
            baseattackbonus: 11,
            basesaves: {
                fortitude: 3,
                reflex: 3,
                will: 6
            },
            damagereduction: 0,
            spellresistance: 0
        },
        skills: {
            totalpoints: 77,
            alchemy: {
                inclass: false,
                ranks: 0
            },
            animalempathy: {
                inclass: false,
                ranks: 0
            },
            appraise: {
                inclass: false,
                ranks: 0
            },
            autohypnosis: {
                inclass: false,
                ranks: 0
            },
            balance: {
                inclass: false,
                ranks: 0
            },
            bluff: {
                inclass: false,
                ranks: 0
            },
            climb: {
                inclass: true,
                ranks: 8
            },
            concentration: {
                inclass: false,
                ranks: 0
            },
            controlshape: {
                inclass: false,
                ranks: 0
            },
            craft: {
                inclass: true,
                ranks: 0
            },
            decipherscript: {
                inclass: false,
                ranks: 0
            },
            diplomacy: {
                inclass: false,
                ranks: 0
            },
            disabledevice: {
                inclass: false,
                ranks: 0
            },
            disguise: {
                inclass: false,
                ranks: 0
            },
            escapeartist: {
                inclass: false,
                ranks: 0
            },
            forgery: {
                inclass: false,
                ranks: 0
            },
            gatherinformation: {
                inclass: false,
                ranks: 0
            },
            handleanimal: {
                inclass: true,
                ranks: 13
            },
            heal: {
                inclass: false,
                ranks: 0
            },
            hide: {
                inclass: false,
                ranks: 0
            },
            iaijutsufocus: {
                inclass: false,
                ranks: 0
            },
            innuendo: {
                inclass: false,
                ranks: 0
            },
            intimidate: {
                inclass: true,
                ranks: 16
            },
            intuitdirection: {
                inclass: false,
                ranks: 0
            },
            jump: {
                inclass: true,
                ranks: 1
            },
            knowledge: {
                history: {
                    inclass: true,
                    ranks: 4
                },
                nobilityandroyalty: {
                    inclass: true,
                    ranks: 8
                }
            },
            listen: {
                inclass: true,
                ranks: 0
            },
            luciddreaming: {
                inclass: false,
                ranks: 0
            },
            martiallore: {
                inclass: false,
                ranks: 0
            },
            movesilently: {
                inclass: false,
                ranks: 0
            },
            openlock: {
                inclass: false,
                ranks: 0
            },
            perform: {
                inclass: true,
                ranks: 0
            },
            pickpocket: {
                inclass: false,
                ranks: 0
            },
            profession: {
                inclass: false,
                ranks: 0
            },
            psicraft: {
                inclass: false,
                ranks: 0
            },
            readlips: {
                inclass: false,
                ranks: 0
            },
            remoteview: {
                inclass: false,
                ranks: 0
            },
            ride: {
                inclass: true,
                ranks: 16
            },
            scry: {
                inclass: false,
                ranks: 0
            },
            search: {
                inclass: false,
                ranks: 0
            },
            sensemotive: {
                inclass: false,
                ranks: 0
            },
            sleightofhand: {
                inclass: false,
                ranks: 0
            },
            speaklanguage: {
                inclass: false,
                ranks: 0
            },
            spot: {
                inclass: true,
                ranks: 3
            },
            survival: {
                inclass: false,
                ranks: 0
            },
            swim: {
                inclass: true,
                ranks: 8
            },
            truespeak: {
                inclass: false,
                ranks: 0
            },
            tumble: {
                inclass: false,
                ranks: 0
            },
            usemagicdevice: {
                inclass: false,
                ranks: 0
            },
            usepsionicdevice: {
                inclass: false,
                ranks: 0
            },
            userope: {
                inclass: false,
                ranks: 0
            },
            wildernesslore: {
                inclass: false,
                ranks: 0
            }
        },
        attacks: [
            {
                name: 'Greataxe',
                damage: '1d12',
                critical: 'x3',
                twohanded: true,
                specialqualities: [{
                    name: '+1 enchantment',
                    modifier: 1
                },
                {
                    name: 'Light',
                    description: 'Sheds light on command'
                }]
            },
            {
                name: 'Great Club',
                damage: '2d8',
                critical: 'x2',
                twohanded: true,
            },
            {
                name: 'Bastard Sword',
                damage: '1d10',
                critical: '19-20/x2',
                twohanded: true,
                specialqualities: [{
                    name: '+1 enchantment',
                    modifier: 1
                },
                {
                    name: 'Axiomatic',
                    description: '+2d6 against chaotic creatures and overcomes damage reduction vs chaos.'
                }]
            },
            {
                name: 'Lance',
                damage: '1d8',
                critical: 'x3',
                specialqualities: [{
                    name: 'Masterwork',
                    modifier: 1
                }],
                notes: '2x damage on a charge attack.'
            },
            {
                name: 'Heavy Flail',
                damage: '2d8',
                critical: '19-20/x2',
                twohanded: true,
                specialqualities: [{
                    name: '+2 enchantment',
                    modifier: 2
                },
                {
                    name: 'Disarming',
                    description: 'Gives the user the improved disarm feat.'
                }],
                notes: 'Large sized'
            },
            {
                name: 'Warforged Left Arm',
                damage: '1d4'
            }
        ],
        armorandprotectiveitems: [
            {
                name: 'Full Plate',
                armorclassbonus: 11,
                maximumdexterity: 2,
                armorcheckpenalty: -3,
                weight: 50,
                specialproperties: [{
                    name: 'Nimbleness',
                    description: 'Gives the nimble property'
                },
                {
                    name: 'Blurring',
                    description: 'Gives the blurring property'
                },
                {
                    name: 'Commander',
                    description: 'Gives allies +1 will saves'
                }]
            },
            {
                name: 'Heavy Steel Shield',
                armorclassbonus: 7,
                armorcheckpenalty: 0,
                specialproperties: [{
                    name: 'Animated',
                    description: 'Gives the animated property'
                },
                {
                    name: 'Vigor',
                    description: 'Use one fighting challange to gain fast healing 5 for 3 rounds.'
                }]
            }
        ],
        inventory: [
            {
                name: 'Adventures Kit'
            },
            {
                name: 'Brute Ring'
            },
            {
                name: 'Gauntlets of Ogre Power'
            }
        ],
        feats: [
            {
                name: 'Improved Bull Rush'
            },
            {
                name: 'Power Attack'
            },
            {
                name: 'Jotunbrud'
            },
            {
                name: 'Ancestral Relic'
            },
            {
                name: 'Ride-by-attack'
            },
            {
                name: 'Knockback'
            },
            {
                name: 'Shield Specialization (heavy)'
            }
        ],
        specialabilities: [
            {
                name: 'By my Honor'
            }
        ],
        classfeatures: [
            {
                name: 'Fighting Challenge'
            },
            {
                name: 'Knights Challenge'
            },
            {
                name: 'Knights Code'
            },
            {
                name: 'Mounted Combat'
            },
            {
                name: 'Shield Block'
            },
            {
                name: 'Armor Mastery (medium)'
            },
            {
                name: 'Shield Specialization (heavy)'
            },
            {
                name: 'Test of Mettle'
            },
            {
                name: 'Vigilant Defender'
            },
            {
                name: 'Paragons Gift, Least'
            },
            {
                name: 'Paragons Gift, Lesser'
            },
            {
                name: 'Paragons Gift, Greater'
            },
            {
                name: 'Paragons Gift, Supreme'
            }
        ],
        miscellaneousstats: {
            racialtraits: [{
                name: '+1 skill points per level'
            },
            {
                name: 'Extra feat at level 1'
            }],
            languages: [{
                name: 'Common'
            }],
        }
    }

    return q.invoke(Character, 'create', characters);

}

connectToDb.then(function () {
    getCurrentCharacterData().then(function (characters) {
        if (characters.length === 0) {
            return seedCharacters();
        } else {
            console.log(chalk.magenta('Seems to already be character data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});