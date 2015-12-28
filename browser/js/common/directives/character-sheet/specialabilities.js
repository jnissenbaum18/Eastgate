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

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});