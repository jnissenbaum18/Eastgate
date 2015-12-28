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

        $scope.deleteCharacter = function () {
            CharacterSheetFactory.deleteCharacter($scope.character._id)
        }

        $scope.log = function () {
            console.log($scope.abilityscores)
        }

        function calculateSheet () {
            
            $scope.abilitymodifiers = {}
            for (var key in $scope.abilityscores) {
                $scope.abilitymodifiers[key] = Math.floor(($scope.abilityscores[key] - 10)/2)
            }

            $scope.calculatedcombatstats = {
                fortitude: $scope.combatstats.saves.fortitude.fortitudebase + $scope.combatstats.saves.fortitude.fortitudemagic + 
                    $scope.combatstats.saves.fortitude.fortitudemisc + $scope.combatstats.saves.fortitude.fortitudetemp + $scope.abilitymodifiers.constitution,
                reflex: $scope.combatstats.saves.reflex.reflexbase + $scope.combatstats.saves.reflex.reflexmagic + 
                    $scope.combatstats.saves.reflex.reflexmisc + $scope.combatstats.saves.reflex.reflextemp + $scope.abilitymodifiers.dexterity,
                will: $scope.combatstats.saves.will.willbase + $scope.combatstats.saves.will.willmagic + 
                    $scope.combatstats.saves.will.willmisc + $scope.combatstats.saves.will.willtemp + $scope.abilitymodifiers.wisdom
            }

            // console.log($scope.calculatedcombatstats)


        }

        calculateSheet()

        $scope.$on('recalculate', function () {
            console.log('Recalculate Sheet')
            calculateSheet()
        })

});