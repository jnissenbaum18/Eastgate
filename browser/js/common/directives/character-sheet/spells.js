app.directive('spells', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            spells: "="
        },
        templateUrl: 'js/common/directives/character-sheet/spells.html',
        link: function (scope) {

            var spell = {
                name: '',
                prepared: 0,
                description: ''
            }

        	scope.addspell = function (spellLevel) {
                scope.spells.level[spellLevel].push(spell)
        	}

            scope.deletespell = function (i, l) {
                setTimeout(function(){
                    scope.spells.level[l].splice(scope.spells.level[l].indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

            scope.resetcurrentspells = function () {
                for (var level in scope.spells.totalspellsperday) {
                    scope.spells.currentspellsperday[level] = scope.spells.totalspellsperday[level]
                }
            }

            for (var lv in scope.spells.level) {
                for (var i = scope.spells.level[lv].length - 1; i >= 0; i--) {
                    $rootScope.lintObjects(spell, scope.spells.level[lv][i])     
                };
            }

            scope.relevantabilities = {
                'Intelligence': 'intelligence',
                "Wisdom": 'wisdom',
                "Charisma": 'charisma'
            }
        }
   };
});