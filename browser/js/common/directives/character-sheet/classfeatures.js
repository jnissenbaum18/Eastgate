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

            scope.deletefeature = function (i) {
                setTimeout(function(){
                    var classfeatures = angular.copy(scope.classfeatures);
                    var indexToRemove = scope.classfeatures.indexOf(i);
                    classfeatures.splice(indexToRemove, 1)
                    scope.classfeatures = classfeatures; 
                    scope.$digest();
                }, 0);
            } 

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});