app.directive('combatstats', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            combatstats: "=",
            calculatedcombatstats: "="
        },
        templateUrl: 'js/common/directives/character-sheet/combatstats.html',
        link: function (scope) {
        	scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});