app.directive('skills', function ($state, $rootScope) {
	return {
        restrict: 'E',
        scope: {
            skills: "=",
            calculatedskills: "="
        },
        templateUrl: 'js/common/directives/character-sheet/skills.html',
        link: function (scope) {

            function toTitleCase(str) {
                return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            }

        	scope.recalculate = function () {
                scope.$emit('recalculate') 
            }

            scope.newskill = {
                name: '',
                inclass: false,
                crossclass: false,
                trainedonly: false,
                armorcheckpenalty: false,
                ranks: 0,
                misc: 0,
                modifier: ''
            }

            scope.modifiers = {
                "Strength": "strength",
                "Dexterity": "dexterity",
                "Constitution": "constitution",
                "Intelligence": "intelligence",
                "Wisdom": "wisdom",
                "Charisma": "charisma"
            }

            scope.rmskill = {}

            scope.addskill = function () {
                scope.newskill.name = toTitleCase(scope.newskill.name)
                
                scope.skills.push(JSON.parse(JSON.stringify(scope.newskill)))
                scope.recalculate()
            }

            scope.removeskill = function (i) {
                console.log(i)
                setTimeout(function(){
                    scope.skills.splice(scope.skills.indexOf(i), 1)
                    scope.$digest();
                }, 0);
            }

        }
   };
});

app.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort();
    if(reverse) filtered.reverse();
    return filtered;
  };
});
