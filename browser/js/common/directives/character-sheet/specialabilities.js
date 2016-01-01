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
                    scope.specialabilities.splice(scope.specialabilities.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});