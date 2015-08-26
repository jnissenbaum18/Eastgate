'use strict';
app.factory('CharacterSheetFactory', function ($http) {

    return {
        getCharacters: function (userId) {
            return $http.get('/api/characters/' + userId)
            .then(function (characters) {
                return characters.data
            })
        },
        getCurrentCharacter: function (characterId) {
            return $http.get('/api/characters/current/' + characterId)
            .then(function (character) {
                return character.data
            })
        },
        submitNewCharacter: function (newCharacter, id) {
            return $http.post('/api/characters/'+id, newCharacter).then(function (result) {
                return result.data;
            });
        },
        saveCharacter: function (character) {
            return $http.put('/api/characters', character).then(function (result) {
                return result.data
            })
        },
        deleteCharacter: function (id) {
            return $http.delete('/api/characters/'+id).then(function (response) {
                return response.data;
            });
        }
    }
});