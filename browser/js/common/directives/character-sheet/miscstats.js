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
                    var racialtraits = angular.copy(scope.miscstats.racialtraits);
                    var indexToRemove = scope.miscstats.racialtraits.indexOf(i);
                    racialtraits.splice(indexToRemove, 1)
                    scope.miscstats.racialtraits = racialtraits; 
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
                    var languages = angular.copy(scope.miscstats.languages);
                    var indexToRemove = scope.miscstats.languages.indexOf(i);
                    languages.splice(indexToRemove, 1)
                    scope.miscstats.languages = languages; 
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
                    var affiliationsandenemies = angular.copy(scope.miscstats.affiliationsandenemies);
                    var indexToRemove = scope.miscstats.affiliationsandenemies.indexOf(i);
                    affiliationsandenemies.splice(indexToRemove, 1)
                    scope.miscstats.affiliationsandenemies = affiliationsandenemies; 
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});