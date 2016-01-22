app.directive('attacks', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            attacks: "="
        },
        templateUrl: 'js/common/directives/character-sheet/attacks.html',
        link: function (scope) {

            var attack = {
                name: '',
                damagedie: '', 
                damagenumber: 0,
                critical: '',
                attackbonus: 0,
                miscatkmodifier: 0,
                weapontype: 0,
                damagetype: '',
                range: 0, 
                masterwork: false,
                modifier: 0,
                specialqualities: []
            }

            scope.deleteattack = function (i) {
                setTimeout(function(){
                    scope.attacks.splice(scope.attacks.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }   

            scope.deletequality = function (i, j) {
                setTimeout(function(){
                    var atkidx = scope.attacks.indexOf(i)
                    scope.attacks[atkidx].specialqualities.splice(scope.attacks[atkidx].specialqualities.indexOf(j), 1)
                    scope.$digest();
                }, 0);
            }           

        	scope.addattack = function () {

        		scope.attacks.push(attack)
                
        	}

            scope.addquality = function (atk) {
                var specialquality = {
                    name: '',
                    description: ''
                }
                atk.specialqualities.push(specialquality)
            }
            
            for (var i = scope.attacks.length - 1; i >= 0; i--) {
                $rootScope.lintObjects(attack, scope.attacks[i])     
            };

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