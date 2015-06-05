'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('characterSheet', {
        url: '/character-sheet',
        templateUrl: 'js/character-sheet/character-sheet.html',
        controller: 'CharacterSheetCtrl'
    });
});

app.controller('CharacterSheetCtrl', function ($scope, AuthService, CharacterSheet, $state) {
    
    AuthService.getLoggedInUser().then(function(user) {
        $scope.user = user
        return user
    })
    .then(function(user) {
        return CharacterSheet.getCharacters(user.characters)
    })
    .then(function(characters){
        $scope.characters = characters
        $scope.character = characters[0]
        console.log($scope.character)
    })

});