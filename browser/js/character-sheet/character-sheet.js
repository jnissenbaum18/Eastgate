'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('characters.characterSheet', {
        url: '/character-sheet/:charactername/:characterid',
        templateUrl: 'js/character-sheet/character-sheet.html',
        controller: 'CharacterSheetCtrl',
        resolve: {
            character: function ($stateParams, CharacterSheetFactory) {
                $('#load-icon').removeClass("inactive");
                $('#load-icon').addClass("active");
                return CharacterSheetFactory.getCurrentCharacter($stateParams.characterid)
                .then(function (character) {
                    $('#load-icon').removeClass("active");
                    $('#load-icon').addClass("inactive");
                    return character
                })
            }
        }
    });
});

app.controller('CharacterSheetCtrl', function ($scope, AuthService, $state, character, CharacterSheetFactory, $rootScope) {

        if (!character) {
            $state.go('characters')
        }

        console.log(character)
        $scope.character = character
        $scope.abilityscores = $scope.character.abilityscores
        $scope.attacks = $scope.character.attacks
        $scope.characterstats = $scope.character.characterstats
        $scope.classfeatures = $scope.character.classfeatures
        $scope.combatstats = $scope.character.combatstats
        $scope.feats = $scope.character.feats
        $scope.inventory = $scope.character.inventory
        $scope.miscstats = $scope.character.miscstats
        $scope.notes = $scope.character.notes
        $scope.protectiveitems = $scope.character.protectiveitems
        $scope.skills = $scope.character.skills
        $scope.specialabilities = $scope.character.specialabilities
        $scope.spells = $scope.character.spells

        function calculateSheet () {

            var sizemodifier = Number($scope.characterstats.charactersize)
            
            $scope.abilitymodifiers = {}
            for (var key in $scope.abilityscores) {
                var totalmod = 0

                if ($scope.abilityscores[key].temp > 0) {
                    totalmod += Math.floor(($scope.abilityscores[key].temp - 10)/2)
                } else {
                    totalmod += Math.floor(($scope.abilityscores[key].score - 10)/2)
                }

                totalmod += Math.floor(($scope.abilityscores[key].misc)/2)

                $scope.abilitymodifiers[key] = totalmod
            }

            $scope.attacks.forEach(function(attack) {
                // Attack Bonus
                var atkbonus = 0
                atkbonus += $scope.combatstats.baseattackbonus
                if (!!sizemodifier !== false) {
                    atkbonus += sizemodifier
                }
                if (Number(attack.weapontype) === 3) {
                    atkbonus += $scope.abilitymodifiers.dexterity
                } else {
                    atkbonus += $scope.abilitymodifiers.strength
                }
                if (attack.modifier > 0) {
                    atkbonus += attack.modifier
                } else if (attack.masterwork) {
                    atkbonus += 1
                }
                atkbonus += attack.miscatkmodifier

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

                // if (dmgbonus > 0) {
                //     dmgbonus = '+' + String(dmgbonus)
                // }

                attack.damagebonus = dmgbonus
                return
            })

            var totalarmorbonus = 0
            var totalacp = 0

            $scope.protectiveitems.forEach(function(item) {

                item.totalbonus = item.armorclassbonus
                item.totalarmorcheckpenalty = item.armorcheckpenalty

                if (item.modifier > 0) {
                    item.totalarmorcheckpenalty = item.armorcheckpenalty - 1
                    item.totalbonus = item.armorclassbonus + item.modifier
                } else if (item.masterwork) {
                    item.totalarmorcheckpenalty = item.armorcheckpenalty - 1
                }

                totalarmorbonus += item.totalbonus
                totalacp += item.totalarmorcheckpenalty

            })

            var totallevel = 0

            for (var i = $scope.characterstats.classarray.length - 1; i >= 0; i--) {
                totallevel += $scope.characterstats.classarray[i].level
            }

            $scope.spells.savedcs = {}
            var relevantabilitymod = $scope.abilitymodifiers[$scope.spells.relevantability]

            for (var i = 9; i >= 0; i--) {
                $scope.spells.savedcs[i] = 10 + i + relevantabilitymod + $scope.spells.savedcmodifier
            }

            //bonus spells

            $scope.spells.totalspellsperday = {}
            for (var level in $scope.spells.spellsperday) {

                $scope.spells.totalspellsperday[level] = {}

                if ($scope.spells.casterlevel > 0 && level <= (($scope.spells.casterlevel/2) + 1)) {
                    $scope.spells.totalspellsperday[level].base = Math.ceil((1 + relevantabilitymod - level)/4) + $scope.spells.spellsperday[level]
                } else {
                    $scope.spells.totalspellsperday[level].base = $scope.spells.spellsperday[level]
                }

                $scope.spells.totalspellsperday[level].additional = $scope.spells.additionalspellsperday[level]

            }

            var moneytotal = 0

            for (var money in $scope.inventory.money) {
                if (money === 'pp') {
                    moneytotal += $scope.inventory.money.pp * 10
                } else if (money === 'gp') {
                    moneytotal += $scope.inventory.money.gp
                } else if (money === 'sp') {
                    moneytotal += $scope.inventory.money.sp / 10
                } else if (money === 'cp') {
                    moneytotal += $scope.inventory.money.cp / 100
                }
            }

            $scope.inventory.money.total = (Math.floor(moneytotal * 1000) / 1000)

            $scope.skills.sort(function (a,b) {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            })

            var currentskillpoints = 0

            for (var i = $scope.skills.length - 1; i >= 0; i--) {
                
                var skillmod = 0

                if (!$scope.skills[i].modifier) {

                } else {
                    skillmod += $scope.abilitymodifiers[$scope.skills[i].modifier]
                }

                if ($scope.skills[i].inclass) {
                    skillmod += $scope.skills[i].ranks
                } else if ($scope.skills[i].crossclass) {

                } else {
                    skillmod += Math.floor($scope.skills[i].ranks/2)
                }

                if ($scope.skills[i].armorcheckpenalty) {
                    skillmod -= Math.abs(totalacp)
                }

                skillmod += $scope.skills[i].misc

                $scope.skills[i].skillmodifier = skillmod

                currentskillpoints += $scope.skills[i].ranks

            }

            $scope.calculatedskills = {
                totalskillpoints: (totallevel + 3) * ($scope.combatstats.skillpointsperlevel + $scope.abilitymodifiers.intelligence),
                maxranks: totallevel + 3,
                crossclass: Math.floor((totallevel + 3)/2),
                currentskillpoints: currentskillpoints
            }

            var ac = 10 + totalarmorbonus + $scope.abilitymodifiers.dexterity + sizemodifier

            $scope.calculatedcombatstats = {
                fortitude: $scope.combatstats.saves.fortitude.fortitudebase + $scope.combatstats.saves.fortitude.fortitudemagic + 
                    $scope.combatstats.saves.fortitude.fortitudemisc + $scope.combatstats.saves.fortitude.fortitudetemp + $scope.abilitymodifiers.constitution,
                reflex: $scope.combatstats.saves.reflex.reflexbase + $scope.combatstats.saves.reflex.reflexmagic + 
                    $scope.combatstats.saves.reflex.reflexmisc + $scope.combatstats.saves.reflex.reflextemp + $scope.abilitymodifiers.dexterity,
                will: $scope.combatstats.saves.will.willbase + $scope.combatstats.saves.will.willmagic + 
                    $scope.combatstats.saves.will.willmisc + $scope.combatstats.saves.will.willtemp + $scope.abilitymodifiers.wisdom,
                armorclass: 10 + totalarmorbonus + $scope.abilitymodifiers.dexterity + sizemodifier + $scope.combatstats.miscarmorclassbonus + $scope.combatstats.deflectionmodifier + $scope.combatstats.naturalarmor,
                flatfooted: 10 + totalarmorbonus + sizemodifier + $scope.combatstats.miscarmorclassbonus + $scope.combatstats.deflectionmodifier + $scope.combatstats.naturalarmor,
                toucharmor: 10 + $scope.abilitymodifiers.dexterity + sizemodifier + $scope.combatstats.miscarmorclassbonus + $scope.combatstats.deflectionmodifier + $scope.combatstats.naturalarmor,
                initiative: $scope.combatstats.initiative + $scope.abilitymodifiers.dexterity,
                grapple: $scope.combatstats.miscgrapplebonus + $scope.combatstats.baseattackbonus + $scope.abilitymodifiers.strength + sizemodifier
            }

            $scope.character.notes = $scope.notes

        }

        calculateSheet()

        $rootScope.character = $scope.character

        $scope.$emit('setCharacter') 

        $scope.$on('recalculate', function () {
            calculateSheet()
        })

        $(document).ready(function(){
            $('.collapsible').collapsible({
                accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });

});