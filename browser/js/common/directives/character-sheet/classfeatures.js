app.directive('classfeatures', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            classfeatures: "="
        },
        templateUrl: 'js/common/directives/character-sheet/classfeatures.html',
        link: function (scope) {

        	scope.addfeature = function () {
        		scope.classfeatures.push({
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