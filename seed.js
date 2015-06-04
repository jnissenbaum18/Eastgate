/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

Refer to the q documentation for why and how q.invoke is used.

*/

var mongoose = require('mongoose');
var connectToDb = require('./server/db');
var q = require('q');
var chalk = require('chalk');

var User = mongoose.model('User');
var Character = mongoose.model('Character')

var getCurrentUserData = function () {
    return q.ninvoke(User, 'find', {});
};

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus',
            characters: ['556dfa1eab550daa72dd2506']
        }
    ];

    return q.invoke(User, 'create', users);

};

var getCurrentCharacterData = function () {
    return q.ninvoke(Character, 'find', {})
}

var seedCharacters = function () {

    var characters = {
        name: "Sir Addon Vance",
        player: "James Nissenbaum",
        class: [{
            name: "Fighter",
            level: 5
        },
        {
            name: "Mythic Exemplar",
            level: 7
        }],
        race: "Human",
        subtype: null,
        deity: null,
        alignment: "Lawful Good",
        size: "Medium",
        age: 30,
        gender: "Male",
        height: 77,
        weight: 270,
        eyes: "Brown",
        hair: "Black",
        skin: "Fair"
    }

    return q.invoke(Character, 'create', characters);

}

connectToDb.then(function () {
    getCurrentUserData().then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});

connectToDb.then(function () {
    getCurrentCharacterData().then(function (characters) {
        if (characters.length === 0) {
            return seedCharacters();
        } else {
            console.log(chalk.magenta('Seems to already be character data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});