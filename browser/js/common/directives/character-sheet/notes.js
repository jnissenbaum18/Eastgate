app.directive('notes', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            notes: "="
        },
        templateUrl: 'js/common/directives/character-sheet/notes.html',
        link: function (scope) {
        	scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});