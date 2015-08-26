app.directive('combatstats', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            combatstats: "="
        },
        templateUrl: 'js/common/directives/character-sheet/combatstats.html',
        link: function (scope) {

        }
   };
});