app.directive('skills', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            skills: "="
        },
        templateUrl: 'js/common/directives/character-sheet/skills.html',
        link: function (scope) {
        	scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});