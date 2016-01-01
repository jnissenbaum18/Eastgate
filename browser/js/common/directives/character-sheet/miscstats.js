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

            scope.deletetrait = function (i) {
                setTimeout(function(){
                    scope.miscstats.racialtraits.splice(scope.miscstats.racialtraits.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

        	scope.addlanguage = function () {
        		scope.miscstats.languages.push({
        			name: ''
        		})
        	}

            scope.deletelanguage = function (i) {
                setTimeout(function(){
                    scope.miscstats.languages.splice(scope.miscstats.languages.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

            scope.addaffiliationorenemy = function () {
                scope.miscstats.affiliationsandenemies.push({
                    name: '',
                    description: ''
                })
            }

            scope.deleteaffiliation = function (i) {
                setTimeout(function(){
                    scope.miscstats.affiliationsandenemies.splice(scope.miscstats.affiliationsandenemies.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});