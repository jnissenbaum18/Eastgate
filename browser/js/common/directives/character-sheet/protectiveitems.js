app.directive('protectiveitems', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            protectiveitems: "="
        },
        templateUrl: 'js/common/directives/character-sheet/protectiveitems.html',
        link: function (scope) {

        	scope.addprotectiveitem = function () {
        		
                var protectiveitem = {
                    name: '',
                    totalbonus: 0,
                    armorclassbonus: 0,
                    modifier: 0,
                    masterwork: false,
                    maximumdexterity: 0,
                    armorcheckpenalty: 0,
                    totalarmorcheckpenalty: 0,
                    weight: 0,
                    specialqualities: []
                }

                var specialquality = {
                    name: '', 
                    description: ''
                }

                scope.protectiveitems.push(protectiveitem)

                scope.addquality = function () {
                    protectiveitem.specialqualities.push(specialquality)
                }

        	}

            scope.deleteitem = function (i) {
                setTimeout(function(){
                    var items = angular.copy(scope.protectiveitems);
                    var indexToRemove = scope.protectiveitems.indexOf(i);
                    items.splice(indexToRemove, 1)
                    scope.protectiveitems = items; 
                    scope.$digest();
                }, 0);
            }   

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});