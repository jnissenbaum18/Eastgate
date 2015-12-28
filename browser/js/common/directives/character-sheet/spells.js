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

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});