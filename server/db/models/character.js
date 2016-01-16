'use strict';
var mongoose = require('mongoose');
var Promise = require('bluebird')
var User = mongoose.model('User')

var schema = new mongoose.Schema({

    characterstats: {},
    abilityscores: {},
    combatstats: {},
    skills: [{
    }],
    attacks: [{
    }],
    protectiveitems: [{
    }],
    inventory: {},
    feats: [{
    }],
    specialabilities: [{
    }],
    classfeatures: [{
    }],
    spells: {},
    miscstats: {},
    notes: {}
});

schema.methods.removal = function () {
    var self = this
    return new Promise(function (resolve, reject) {
        resolve(
            User.findOne({
                characters: {
                    $in: [self._id]
                }
            }).exec()
            .then(function (user) {
                user.characters.pull(self._id);
                return new Promise(function (resolve, reject) {
                    resolve(user.save());
                })
            })
            .then(function(){
                return mongoose.model('Character').remove({_id: self._id}).exec();
            })
            .then(function(){
                return;
            })
        )
    })
}

mongoose.model('Character', schema);

/* 

but in general, you can use post(‘init) hook

​[2:42] 
and post (‘save)

​[2:42] 
like, combo between those two

​[2:42] 
also, post(‘init’ is a hook that gets fired after you load the data

Seema Ullal [2:42 PM] 
I haven’t used this but https://github.com/emirotin/mongodb-migrations

GitHub
emirotin/mongodb-migrations
mongodb-migrations - A Node.js migration framework for MongoDB

Christian Sakai [2:43 PM] 
User.findOne({ name: ‘myself })

​[2:43] 
post.init will fire after that document { name: ‘myself’ } is loaded

​[2:43] 
in thispost init

​[2:43] 
you can

​[2:44] 
 ```post('init', function(loadedDoc) {
   this. _original = loadedDoc.toObject(); // or to JSON, or etc
   
});
```
(edited)

​[2:45] 
but you have to fire the hooks, post init and pre save

​[2:45] 
so you cant do something like

​[2:45] 
User.findOneAndUpdate

​[2:46] 
because post init doesn’t get fired in by using that method

​[2:46] 
neither does pre.save

​[2:46] 
so its kinda weird, you have to do explicitly

​[2:46] 
User.findOne()….bla bla bla nd then user.save()

James Nissenbaum [2:46 PM] 
thats...annoying

Christian Sakai [2:47 PM] 
because, findOneAndUpdate by mongoose directly calls mongodb driver, so there is no hook need to be fired

James Nissenbaum [2:47 PM] 
how do i compare the previous schema to the current schema? Or should i just try to update it every time?

Christian Sakai [2:47 PM] 
where as, findOne and user.save is a syntatic sugar method implemented by mongoose, so they can put hooks there

​[2:47] 
basically

​[2:47] 
probably soemthing like this

​[2:49] 
 ```User.post('init', function(docLoaded) {
  this._original = docLoaded.toObject();
});

User.pre('save', function() {
  if (this._original === this.toObject()) {
    // do my thing
  }
});
```

​[2:49] 
something like that

​[2:49] 
on the comparison, obviously you have to implement your own comparison method

James Nissenbaum [2:49 PM] 
right

Christian Sakai [2:50 PM] 
maybe lodash can help doing an object deepEqual comparison to see what changed

​[2:50] 
just remember the catch is, you have to do User.find and then user.save instead of User.findOneAndUpdate

btw you can also do in your hook, a User.find({}) to get what is in the database. Apparently this is considered acceptable practice, even though performance wise maybe not? idk
*/