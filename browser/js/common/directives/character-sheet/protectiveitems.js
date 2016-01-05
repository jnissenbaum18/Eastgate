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

                scope.protectiveitems.push(protectiveitem)

        	}

            scope.addquality = function (itm) {
                var specialquality = {
                    name: '', 
                    description: ''
                }
                itm.specialqualities.push(specialquality)
            }

            scope.deleteitem = function (i) {
                setTimeout(function(){
                    scope.protectiveitems.splice(scope.protectiveitems.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }   

            scope.deletequality = function (i, j) {
                setTimeout(function(){
                    var itmidx = scope.protectiveitems.indexOf(i)
                    scope.protectiveitems[itmidx].specialqualities.splice(scope.protectiveitems[itmidx].specialqualities.indexOf(j), 1)
                    scope.$digest();
                }, 0);
            }   

            scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

        }
   };
});