app.directive('inventory', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            inventory: "="
        },
        templateUrl: 'js/common/directives/character-sheet/inventory.html',
        link: function (scope) {

            var item = {
                name: '',
                description: '',
                pagereference: '',
                quantity: 0, 
                weight: 0
            }

        	scope.additem = function () {
        		scope.inventory.items.push(item)
        	}

            for (var i = scope.inventory.length - 1; i >= 0; i--) {
                $rootScope.lintObjects(item, scope.inventory[i])     
            };

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