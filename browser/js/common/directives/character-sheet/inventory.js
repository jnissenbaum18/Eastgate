app.directive('inventory', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            inventory: "="
        },
        templateUrl: 'js/common/directives/character-sheet/inventory.html',
        link: function (scope) {

        	scope.additem = function () {
        		scope.inventory.items.push({
        			name: '',
        			description: '',
        			pagereference: '',
        			quantity: 0, 
        			weight: 0
        		})
        	}

            scope.deleteitem = function (i) {
                setTimeout(function(){
                    scope.inventory.items.splice(scope.inventory.items.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});