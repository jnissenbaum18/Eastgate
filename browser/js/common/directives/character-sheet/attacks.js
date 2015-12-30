app.directive('attacks', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            attacks: "="
        },
        templateUrl: 'js/common/directives/character-sheet/attacks.html',
        link: function (scope) {

            $(function () {
                $('input[type="checkbox"]').bootstrapSwitch();
            });

            scope.isSelected = false

        	scope.addattack = function () {

                var attack = {
                    name: '',
                    damage: '',
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

                var createClosure = function (j) {
                    return function(){return j;}
                }

                
                
        	}

            scope.deleteattack = function (i) {
                console.log(scope.attacks)
                scope.attacks.splice(i, 1)
                console.log(scope.attacks)
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