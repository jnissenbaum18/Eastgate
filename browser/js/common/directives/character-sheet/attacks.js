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
                    attackbonus: 0,
                    weapontype: 0,
        			specialqualities: [{
        				name: '',
        				modifier: 0,
        				description: ''
        			}]
        		})
        	}

            scope.weapontypes = {
                'One Hand': 0,
                'Two Hand': 1,
                'Off Hand': 2,
                'Ranged': 3
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});