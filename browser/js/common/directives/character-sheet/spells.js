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
                console.log(i, l)
                setTimeout(function(){
                    var spells = angular.copy(scope.spells.level[l]);
                    var indexToRemove = scope.spells.level[l].indexOf(i);
                    spells.splice(indexToRemove, 1)
                    scope.spells.level[l] = spells; 
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