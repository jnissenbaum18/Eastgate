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
        notes: ''
    }

    $scope.deleteCharacter = function (characterId) {
        CharacterSheetFactory.deleteCharacter(characterId).then(function (result) {
            $state.reload();
        })
        .catch(function(e) {console.log(e);});
    }

    $scope.setCharacter = function (character) {
        $scope.currentCharacter = character
    }

    $scope.goToCharacter = function (character) {
        $scope.currentCharacter = character.characterstats.name
        $state.go('characters.characterSheet', {charactername: character.characterstats.name, characterid: character._id});
    };
    
    $scope.submitCharacter = function (newCharacter) {
        CharacterSheetFactory.submitNewCharacter(newCharacter, user._id).then(function (savedCharacter) {
            $state.reload();
            return savedCharacter
        }).then(function (savedCharacter) {
            $scope.goToCharacter(savedCharacter)
        })
        .catch(function(e) {console.log(e);});
    }


});