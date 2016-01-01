app.directive('spells', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            spells: "="
        },
        templateUrl: 'js/common/directives/character-sheet/spells.html',
        link: function (scope) {
        	scope.addspell = function (spellLevel) {
                scope.spells.level[spellLevel].push({
        			name: '',
        			description: ''
        		})
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

            scope.relevantabilities = {
                'Intelligence': 'intelligence',
                "Wisdom": 'wisdom',
                "Charisma": 'charisma'
            }
        }
   };
});