app.directive('characterstats', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            characterstats: "="
        },
        templateUrl: 'js/common/directives/character-sheet/characterstats.html',
        link: function (scope) {

            var cls = {
                name: '',
                level: 0
            }

        	scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

            scope.sizes = {
                'Colossal': -8, 
                'Gargantuan': -4, 
                'Huge': -2, 
                'Large': -1, 
                'Medium': 0, 
                'Small': +1, 
                'Tiny': +2, 
                'Diminutive': +4, 
                'Fine': +8
            }

            scope.addclass = function () {
                

                scope.characterstats.classarray.push(cls)
            }

            for (var i = scope.characterstats.classarray.length - 1; i >= 0; i--) {
                $rootScope.lintObjects(cls, scope.characterstats.classarray[i])     
            };

            scope.deleteclass = function (i) {
                setTimeout(function(){
                    scope.characterstats.classarray.splice(scope.characterstats.classarray.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }  
        }
   };
});