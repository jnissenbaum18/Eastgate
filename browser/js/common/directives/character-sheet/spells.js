app.directive('spells', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            spells: "="
        },
        templateUrl: 'js/common/directives/character-sheet/spells.html',
        link: function (scope) {
        	scope.addspell = function () {
        		// scope.spells.push({
        		// 	name: '',
        		// 	description: ''
        		// })
        	}
        }
   };
});