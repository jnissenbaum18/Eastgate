app.directive('abilityscores', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            abilityscores: "=",
            abilitymodifiers: "="
        },
        templateUrl: 'js/common/directives/character-sheet/abilityscores.html',
        link: function (scope) {

        }
   };
});