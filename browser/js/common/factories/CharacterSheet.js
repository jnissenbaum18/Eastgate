'use strict';
app.factory('CharacterSheet', function ($http) {

    return {
        getCharacters: function (characterIds) {
            return $http.get('/api/characters/characters', {
                params: {
                    characterIds: characterIds
                }
            }).then(function (response) {
                return response.data
            })
        }
    }
});