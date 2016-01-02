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
            console.log($scope.attacks)
        }

        function calculateSheet () {

            var sizemodifier = Number($scope.characterstats.charactersize)
            
            $scope.abilitymodifiers = {}
            for (var key in $scope.abilityscores) {
                $scope.abilitymodifiers[key] = Math.floor(($scope.abilityscores[key] - 10)/2)
            }

            $scope.attacks.forEach(function(attack) {
                // Attack Bonus
                var atkbonus = 0
                atkbonus += $scope.combatstats.baseattackbonus
                if (!!sizemodifier !== false) {
                    atkbonus += sizemodifier
                }
                if (attack.weapontype === 3) {
                    atkbonus += $scope.abilitymodifiers.dexterity
                } else {
                    atkbonus += $scope.abilitymodifiers.strength
                }
                if (attack.modifier > 0) {
                    atkbonus += attack.modifier
                } else if (attack.masterwork) {
                    atkbonus += 1
                }
                attack.attackbonus = atkbonus

                // Damage Bonus
                var dmgbonus = 0

                var wpntype = Number(attack.weapontype)

                if (wpntype === 1) {
                    dmgbonus += Math.floor($scope.abilitymodifiers.strength * 1.5)
                } else if (wpntype === 2) {
                    dmgbonus += Math.floor($scope.abilitymodifiers.strength * 0.5)
                } else if (wpntype === 3) {

                } else {
                    dmgbonus += $scope.abilitymodifiers.strength
                }

                dmgbonus += attack.modifier

                attack.damagebonus = dmgbonus
                return
            })

            var totalarmorbonus = 0

            $scope.protectiveitems.forEach(function(item) {

                item.totalbonus = item.armorclassbonus
                item.totalarmorcheckpenalty = item.armorcheckpenalty

                if (item.masterwork) {
                    item.totalarmorcheckpenalty = item.armorcheckpenalty - 1
                } else if (item.modifier > 0) {
                    item.totalarmorcheckpenalty = item.armorcheckpenalty - 1
                    item.totalbonus = item.armorclassbonus + item.modifier
                }

                totalarmorbonus += item.totalbonus

            })

            $scope.spells.savedcs = {}
            var relevantabilitymod = $scope.abilitymodifiers[$scope.spells.relevantability]

            for (var i = 9; i >= 0; i--) {
                $scope.spells.savedcs[i] = 10 + i + relevantabilitymod
            }

            for (var skill in $scope.skills) {

                var skillmod = 0

                skillmod += $scope.abilitymodifiers[$scope.skills[skill].modifier]
                if ($scope.skills[skill].inclass) {
                    skillmod += $scope.skills[skill].ranks
                } else if ($scope.skills[skill].crossclass) {

                } else {
                    skillmod += Math.floor($scope.skills[skill].ranks/2)
                }

                $scope.skills[skill].skillmodifier = skillmod
            }

            var ac = 10 + totalarmorbonus + $scope.abilitymodifiers.dexterity + sizemodifier

            $scope.calculatedcombatstats = {
                fortitude: $scope.combatstats.saves.fortitude.fortitudebase + $scope.combatstats.saves.fortitude.fortitudemagic + 
                    $scope.combatstats.saves.fortitude.fortitudemisc + $scope.combatstats.saves.fortitude.fortitudetemp + $scope.abilitymodifiers.constitution,
                reflex: $scope.combatstats.saves.reflex.reflexbase + $scope.combatstats.saves.reflex.reflexmagic + 
                    $scope.combatstats.saves.reflex.reflexmisc + $scope.combatstats.saves.reflex.reflextemp + $scope.abilitymodifiers.dexterity,
                will: $scope.combatstats.saves.will.willbase + $scope.combatstats.saves.will.willmagic + 
                    $scope.combatstats.saves.will.willmisc + $scope.combatstats.saves.will.willtemp + $scope.abilitymodifiers.wisdom,
                armorclass: ac,
                flatfooted: ac - $scope.abilitymodifiers.dexterity,
                toucharmor: ac - totalarmorbonus
            }


        }

        calculateSheet()

        $scope.$on('recalculate', function () {
            console.log('Recalculate Sheet')
            calculateSheet()
        })

});