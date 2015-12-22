app.directive('miscstats', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            miscstats: "="
        },
        templateUrl: 'js/common/directives/character-sheet/miscstats.html',
        link: function (scope) {

        	scope.addracialtrait = function () {
        		scope.miscstats.racialtraits.push({
        			name: '',
        			description: ''
        		})
        	}

        	scope.addlanguage = function () {
        		scope.miscstats.languages.push({
        			name: ''
        		})
        	}

            scope.addaffiliationorenemy = function () {
                scope.miscstats.affiliationsandenemies.push({
                    name: '',
                    description: ''
                })
            }

        }
   };
});