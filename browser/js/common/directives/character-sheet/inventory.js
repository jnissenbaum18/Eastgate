app.directive('inventory', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            inventory: "="
        },
        templateUrl: 'js/common/directives/character-sheet/inventory.html',
        link: function (scope) {

        	scope.additem = function () {
        		scope.inventory.push({
        			name: '',
        			description: '',
        			pagereference: '',
        			quantity: 0, 
        			weight: 0
        		})
        	}

            scope.deleteitem = function (i) {
                setTimeout(function(){
                    var inventory = angular.copy(scope.inventory);
                    var indexToRemove = scope.inventory.indexOf(i);
                    inventory.splice(indexToRemove, 1)
                    scope.inventory = inventory; 
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});