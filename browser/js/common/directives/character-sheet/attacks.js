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
                    var attacks = angular.copy(scope.attacks);
                    var indexToRemove = scope.attacks.indexOf(i);
                    attacks.splice(indexToRemove, 1)
                    scope.attacks = attacks; 
                    scope.$digest();
                    /* Note known issue: scope.attacks will log an empty array
                    while a manual log from $scope.attacks on the main controller
                    will yield an array with the old object still inside. I don't
                    think this will be a problem since this phantom object will
                    be overwritten anyway and the user won't notice the difference.*/
                }, 0);
            }   

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