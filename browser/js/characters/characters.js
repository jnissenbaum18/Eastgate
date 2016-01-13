app.config(function ($stateProvider) {
    $stateProvider.state('characters', {
        url: '/characters',
        templateUrl: 'js/characters/characters.html',
        controller: 'CharactersCtrl',
        resolve: {
            characters: function (AuthService, CharacterSheetFactory) {
                return AuthService.getLoggedInUser()
                .then(function (user) {
                    return CharacterSheetFactory.getCharacters(user._id)
                })
            },
            user: function (AuthService) {
                return AuthService.getLoggedInUser();
            }
        }
    });
});

app.controller('CharactersCtrl', function ($scope, AuthService, characters, user, $state, CharacterSheetFactory, $rootScope) {

    $scope.characters = characters
    $scope.newCharacter = {
        characterstats: {
            name: '',
            race: '',
            subtype: '',
            deity: '',
            alignment: '',
            charactersize: '',
            age: 0,
            gender: '',
            height: 0,
            weight: 0,
            eyes: '',
            hair: '',
            skin: ''
        },
        abilityscores: {
            strength: {
                score: 8,
                misc: 0,
                temp: 0
            },
            dexterity: {
                score: 8,
                misc: 0,
                temp: 0
            },
            constitution: {
                score: 8,
                misc: 0,
                temp: 0
            },
            intelligence: {
                score: 8,
                misc: 0,
                temp: 0
            },
            wisdom: {
                score: 8,
                misc: 0,
                temp: 0
            },
            charisma: {
                score: 8,
                misc: 0,
                temp: 0
            },
        },
        combatstats: {
            maxhitpoints: 0,
            currenthitpoints: 0,
            experience: 0,
            baseattackbonus: 0,
            saves: {
                fortitude: {
                    fortitudebase: 0,
                    fortitudemagic: 0, 
                    fortitudemisc: 0,
                    fortitudetemp: 0      
                },
                reflex: {
                    reflexbase: 0,
                    reflexmagic: 0, 
                    reflexmisc: 0,
                    reflextemp: 0 
                },
                will: {
                    willbase: 0,
                    willmagic: 0, 
                    willmisc: 0,
                    willtemp: 0 
                }
            },
            damagereduction: 0,
            spellresistance: 0,
            skillpointsperlevel: 0,
            initiative: 0,
            miscarmorclassbonus: 0,
            miscgrapplebonus: 0
        },
        spells: {
            spellsave: 0,
            arcanespellfailure: 0,
            relevantability: 0,
            schools: {
                specialty: '',
                prohibited: ''
            },
            spellsperday: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0
            }
        },
        miscstats: {
            reigonoforigin: ''
        },
        notes: '',
        skills: [{
            name: 'Alchemy',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Animal Empathy',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Appraise',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Auto Hypnosis',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Balance',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Bluff',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Climb',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'strength'
        },
        {
            name: 'Concentration',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'constitution'
        },
        {
            name: 'Control Shape',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Craft',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Decipher Script',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Diplomacy',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Disable Device',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Disguise',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Escape Artist',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Forgery',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Gather Information',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Handle Animal',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Heal',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Hide',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Iaijutsu Focus',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Innuendo',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Intimidate',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Intuit Direction',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Jump',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'strength'
        },
        {
            name: 'Knowledge: Arcana',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge Architecture and Engineering',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Barbarian Lore',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Code of Martial Honor',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Dungeoneering',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Geography',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: History',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Law',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Local',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Nature',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Nobility and Royalty',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Psionics',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Religion',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Shadow Lands',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Spirits',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Tactics',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: The Planes',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: War',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Knowledge: Weaponry',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Listen',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Lucid Dreaming',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Martial Lore',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Move Silently',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Open Lock',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Perform',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Pick Pocket',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Profession',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Psicraft',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Read Lips',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Remote View',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Ride',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Scry',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Search',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Sense Motive',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Sleight of Hand',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Speak Language',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: false
        },
        {
            name: 'Spellcraft',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Spot',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Survival',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        },
        {
            name: 'Swim',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'strength'
        },
        {
            name: 'Truespeak',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'intelligence'
        },
        {
            name: 'Tumble',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: true,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Use Magic Device',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Use Psionic Device',
            inclass: false,
            crossclass: false,
            trainedonly: true,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'charisma'
        },
        {
            name: 'Use Rope',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'dexterity'
        },
        {
            name: 'Wilderness Lore',
            inclass: false,
            crossclass: false,
            trainedonly: false,
            armorcheckpenalty: false,
            ranks: 0,
            misc: 0,
            modifier: 'wisdom'
        }]
    }

    $scope.deleteCharacter = function (characterId) {
        if ($rootScope.character && !characterId) {
            // Delete current character loaded into character-sheet
            CharacterSheetFactory.deleteCharacter($rootScope.character._id).then(function () {
                $scope.$emit('updateCharacters') 
                return
            }).then(function () {
                $state.go('characters')
            })
            .catch(function(e) {console.log(e);});
        } else if (characterId) {
            // Delete character selected from the characters dropdown. Unused at the moment. 
            CharacterSheetFactory.deleteCharacter(characterId).then(function (result) {
                $state.reload();
            })
            .catch(function(e) {console.log(e);});
        }
    }

    $scope.setCharacter = function (character) {
        $scope.currentCharacter = character.characterstats.name
    }

    $scope.goToCharacter = function (character) {
        $scope.setCharacter(character)
        $state.go('characters.characterSheet', {charactername: character.characterstats.name, characterid: character._id})
        .catch(function(e) {console.log(e);});
    };

    $scope.updateCharacters = function () {
        CharacterSheetFactory.getCharacters(user._id)
        .then(function (characters) {
            $scope.characters = characters
        })
        .catch(function(e) {console.log(e);});

    }

    $scope.saveCharacter = function () {
        $('#load-icon').removeClass("inactive");
        $('#load-icon').addClass("active");
        CharacterSheetFactory.saveCharacter($rootScope.character)
        .then(function () {
            $('#load-icon').removeClass("active");
            $('#load-icon').addClass("inactive");
            return
        })
        .catch(function(e) {console.log(e);});
    }
    
    $scope.submitCharacter = function (newCharacter) {

        $('#character-submit-button').attr("disabled", true);

        $('#load-icon').removeClass("inactive");
        $('#load-icon').addClass("active");

        CharacterSheetFactory.submitNewCharacter(newCharacter, user._id).then(function (savedCharacter) {
            $state.reload();
            return savedCharacter
        }).then(function (savedCharacter) {
            $scope.updateCharacters();
            return savedCharacter
        }).then(function (savedCharacter) {
            $('#load-icon').removeClass("active");
            $('#load-icon').addClass("inactive");
            $('#character-submit-button').removeAttr("disabled");
            $scope.goToCharacter(savedCharacter)
            return
        })
        .catch(function(e) {console.log(e);});
    }

    $scope.$on('updateCharacters', function () {
        $scope.updateCharacters()
        $scope.currentCharacter = ''
    })

    $scope.$on('setCharacter', function () {
        $scope.setCharacter($rootScope.character)
    })

    $(document).ready(function(){
        // modal initialization
        $('.modal-trigger').leanModal();
    });

});