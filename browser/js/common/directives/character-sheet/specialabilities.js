app.directive('specialabilities', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            specialabilities: "="
        },
        templateUrl: 'js/common/directives/character-sheet/specialabilities.html',
        link: function (scope) {

        	scope.addability = function () {
        		scope.specialabilities.push({
        			name: '',
        			description: ''
        		})
        	}

            scope.deleteability = function (i) {
                setTimeout(function(){
                    var specialabilities = angular.copy(scope.specialabilities);
                    var indexToRemove = scope.specialabilities.indexOf(i);
                    specialabilities.splice(indexToRemove, 1)
                    scope.specialabilities = specialabilities; 
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});