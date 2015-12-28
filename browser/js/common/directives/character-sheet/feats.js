app.directive('feats', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            feats: "="
        },
        templateUrl: 'js/common/directives/character-sheet/feats.html',
        link: function (scope) {
        	scope.addfeat = function () {
        		scope.feats.push({
        			name: '',
        			description: ''
        		})
        	}

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});