app.directive('characterstats', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            characterstats: "="
        },
        templateUrl: 'js/common/directives/character-sheet/characterstats.html',
        link: function (scope) {
        	scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});