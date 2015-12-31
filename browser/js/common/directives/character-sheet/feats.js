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
                    var feats = angular.copy(scope.feats);
                    var indexToRemove = scope.feats.indexOf(i);
                    feats.splice(indexToRemove, 1)
                    scope.feats = feats; 
                    scope.$digest();
                }, 0);
            } 

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }
        }
   };
});