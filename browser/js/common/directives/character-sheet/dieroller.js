app.directive('dieroller', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            abilitymodifiers: "=",
            combatstats: "=",
            calculatedcombatstats: "=",
            attacks: "=",
            skills: "="
        },
        templateUrl: 'js/common/directives/character-sheet/dieroller.html',
        link: function (scope) {

            function toTitleCase(str) {
                return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

            scope.dietypes = {
                'd3': 3, 
                'd4': 4, 
                'd6': 6, 
                'd8': 8, 
                'd10': 10, 
                'd12': 12, 
                'd20': 20, 
                'd100': 100
            }

            scope.rolltype = ''

            scope.rollsubtype = ''

            scope.dienumber = 1

            scope.dietype = 0

            scope.results = []

            scope.total = 0

            scope.clearResults = function () {
                scope.results = []
            }

            scope.rollDie = function (max, number, type, subtype) {
                console.log(type)

                if (max === 0 && type === '') {
                    scope.results = 'You forgot something'
                    scope.total = "Die type maybe?"
                    return
                }

                scope.results = []
                scope.total = 0
                var roll = 0
                if (type === "Normal") {
                    for (var i = number - 1; i >= 0; i--) {
                        roll = Math.floor(Math.random()*(max)+1)
                        scope.results.push(roll)
                        console.log('Base Roll: ', roll)
                    };   
                } else if (type === "Ability Check") {
                    for (var i = number - 1; i >= 0; i--) {
                        roll = Math.floor(Math.random()*(20)+1)
                        scope.results.push(roll + scope.abilitymodifiers[subtype])
                        console.log('Base Roll: ', roll)
                    }; 
                } else if (type === "Saving Throw") {
                    for (var i = number - 1; i >= 0; i--) {
                        roll = Math.floor(Math.random()*(20)+1)
                        scope.results.push(roll + scope.calculatedcombatstats[subtype])
                        console.log('Base Roll: ', roll)
                    }; 
                } else if (type === "Attack Roll") {
                    for (var i = number - 1; i >= 0; i--) {
                        roll = Math.floor(Math.random()*(20)+1)
                        scope.results.push(roll + scope.attacks[subtype].attackbonus)
                        console.log('Base Roll: ', roll)
                    }; 
                } else if (type === "Damage Roll") {
                    for (var i = (scope.attacks[subtype].damagenumber * number) - 1; i >= 0; i--) {
                        roll = Math.floor(Math.random()*(Number(scope.attacks[subtype].damagedie))+1)
                        scope.results.push(roll + scope.attacks[subtype].damagebonus)
                        console.log('Base Roll: ', roll)
                    }; 
                } else if (type === "Skill Check") {
                    for (var i = number - 1; i >= 0; i--) {
                        roll = Math.floor(Math.random()*(20)+1)
                        scope.results.push(roll + scope.skills[subtype].skillmodifier)
                        console.log('Base Roll: ', roll)
                    }; 
                } else if (type === "Initiative") {
                    roll = Math.floor(Math.random()*(20)+1)
                    scope.results.push(roll + scope.calculatedcombatstats.initiative)
                    console.log('Base Roll: ', roll)
                }

                for (var i = scope.results.length - 1; i >= 0; i--) {
                    scope.total += scope.results[i]
                    if (scope.results[i].length < 1) {
                        console.log('roll error')
                        scope.results = 'Did you forget'
                        scope.total = "something?"
                        break
                    }
                };

            }

            scope.setRollType = function (type) {
                scope.rolltype = type
            }

            scope.actions = {
                "Ability Check": "Ability Check",
                "Saving Throw": "Saving Throw",
                "Attack Roll": "Attack Roll",
                "Damage Roll": "Damage Roll",
                "Skill Check": "Skill Check",
                "Initiative": "Initiative"
            }

            scope.subactions = {}

            scope.setSubActions = function (menutype) {

                scope.subactions = {}

                if (menutype === 'Ability Check') { 
                    for (var ability in scope.abilitymodifiers) {
                        scope.subactions[ability] = ability
                    }
                } else if (menutype === "Saving Throw") {
                    for (var savingthrow in scope.combatstats.saves) {
                        scope.subactions[savingthrow] = savingthrow
                    }
                } else if (menutype === "Attack Roll") {
                    for (var i = scope.attacks.length - 1; i >= 0; i--) {
                        scope.subactions[i] = scope.attacks[i].name
                    };
                } else if (menutype === "Damage Roll") {
                    for (var i = scope.attacks.length - 1; i >= 0; i--) {
                        scope.subactions[i] = scope.attacks[i].name
                    };
                } else if (menutype === "Skill Check") {
                    for (var i = scope.skills.length - 1; i >= 0; i--) {
                        scope.subactions[i] = scope.skills[i].name
                    };
                } else if (menutype === "Initiative") {
                    scope.subactions[0] = 'N/A'
                }

                for (var subaction in scope.subactions) {
                    scope.subactions[subaction] = toTitleCase(scope.subactions[subaction])
                }
                console.log(scope.subactions)
            }

            // ability check, saving throw, grapple, attack roll, damage roll, skill check
            scope.recalculate()
        }
   };
});