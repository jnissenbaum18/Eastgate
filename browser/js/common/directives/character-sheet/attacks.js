app.directive('attacks', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            attacks: "="
        },
        templateUrl: 'js/common/directives/character-sheet/attacks.html',
        link: function (scope) {

        	scope.addattack = function () {
        		scope.attacks.push({
        			name: '',
        			damage: '',
        			critical: '',
        			specialqualities: [{
        				name: '',
        				modifier: 0,
        				description: ''
        			}]
        		})
        	}

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});