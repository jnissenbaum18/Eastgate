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

            scope.deletefeat = function (i) {
                setTimeout(function(){
                    scope.feats.splice(scope.feats.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            } 

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});