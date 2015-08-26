app.directive('protectiveitems', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            protectiveitems: "="
        },
        templateUrl: 'js/common/directives/character-sheet/protectiveitems.html',
        link: function (scope) {

        	scope.addprotectiveitem = function () {
        		scope.protectiveitems.push({
        			name: '',
        			armorclassbonus: 0,
        			maximumdexterity: 0,
        			armorcheckpenalty: 0,
        			weight: 0,
        			specialqualities: [{
        				name: '',
        				modifier: 0,
        				description: ''
        			}]
        		})
        	}

        }
   };
});