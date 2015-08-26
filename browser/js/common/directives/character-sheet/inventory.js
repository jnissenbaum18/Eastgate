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

        }
   };
});