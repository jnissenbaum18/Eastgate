'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('characters.characterSheet', {
        url: '/character-sheet/:charactername/:characterid',
        templateUrl: 'js/character-sheet/character-sheet.html',
        controller: 'CharacterSheetCtrl',
        resolve: {
            character: function ($stateParams, CharacterSheetFactory) {
                return CharacterSheetFactory.getCurrentCharacter($stateParams.characterid)
            }
        }
    });
});

app.controller('CharacterSheetCtrl', function ($scope, AuthService, $state, character, CharacterSheetFactory, $rootScope) {

        console.log(character)
        $scope.character = character
        $scope.abilityscores = $scope.character.abilityscores
        $scope.combatstats = $scope.character.combatstats
        $scope.characterstats = $scope.character.characterstats
        $scope.attacks = $scope.character.attacks
        $scope.protectiveitems = $scope.character.protectiveitems
        $scope.classfeatures = $scope.character.classfeatures
        $scope.feats = $scope.character.feats
        $scope.specialabilities = $scope.character.specialabilities
        $scope.inventory = $scope.character.inventory
        $scope.miscstats = $scope.character.miscstats
        $scope.skills = $scope.character.skills
        $scope.spells = $scope.character.spells

        $scope.saveCharacter = function () {
            CharacterSheetFactory.saveCharacter($scope.character);
        }

        $scope.log = function () {
            console.log($scope.abilityscores)
        }

});