app.directive('attacks', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            attacks: "="
        },
        templateUrl: 'js/common/directives/character-sheet/attacks.html',
        link: function (scope) {

            scope.deleteattack = function (i) {
                setTimeout(function(){
                    scope.attacks.splice(scope.attacks.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }   

        	scope.addattack = function () {

                var attack = {
                    name: '',
                    damagedie: '', 
                    damagenumber: 0,
                    critical: '',
                    attackbonus: 0,
                    weapontype: 0,
                    masterwork: false,
                    modifier: 0,
                    specialqualities: []
                }

                var specialquality = {
                    name: '',
                    description: ''
                }

                scope.addquality = function () {
                    attack.specialqualities.push(specialquality)
                }

        		scope.attacks.push(attack)
                
        	}

            scope.weapontypes = {
                'One Hand': 0,
                'Two Hand': 1,
                'Off Hand': 2,
                'Ranged': 3
            }

            scope.damagedie = {
                'd3': 3,
                'd4': 4,
                'd6': 6,
                'd8': 8,
                'd10': 10,
                'd12': 12,
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});