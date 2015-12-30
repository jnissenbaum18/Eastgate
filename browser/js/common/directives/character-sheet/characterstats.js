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
            scope.sizes = {
                'Colossal': -8, 
                'Gargantuan': -4, 
                'Huge': -2, 
                'Large': -1, 
                'Medium': 0, 
                'Small': +1, 
                'Tiny': +2, 
                'Diminutive': +4, 
                'Fine': +8
            }
        }
   };
});