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
            name: ''
        }
    }

    $scope.submitCharacter = function (newCharacter) {
        CharacterSheetFactory.submitNewCharacter(newCharacter, user._id).then(function (result) {
            $state.reload();
        })
        .catch(function(e) {console.log(e);});
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
    


});