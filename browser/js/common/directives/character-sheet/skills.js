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

            var acp = ['balance', 'climb', 'escape_artist', 'hide', 'jump', 'move_silently', 'pick_pocket', 'sleight_of_hand', 'swim', 'tumble']

            var trained = ['alchemy', 'animal_empathy', 'auto_hypnosis', 'decipher_script', 'disable_device', 'handle_animal', 'innuendo', 'intuit_direction', 'arcana', 'architecture_and_engineering', 'barbarian_lore', 'code_of_martial_honor', 'dungeoneering', 'geography', 'history', 'law', 'local', 'nature', 'nobility_and_royalty', 'psionics', 'religion', 'shadow_lands', 'spirits', 'tactics', 'the_planes', 'war', 'weaponry','lucid_dreaming', 'martial_lore', 'open_lock', 'pick_pocket', 'profession', 'psicraft', 'read_lips', 'scry', 'sleight_of_hand', 'speak_language', 'spellcraft', 'truespeak', 'tumble', 'use_magic_device', 'use_psionic_device']

            var sortedskills = {
                alchemy: {
                    idx: 1,
                    modifier: 'intelligence'
                },
                animal_empathy: {
                    idx: 2,
                    modifier: 'charisma'
                },
                appraise: {
                    idx: 3,
                    modifier: 'intelligence'
                },
                auto_hypnosis: {
                    idx: 4,
                    modifier: 'wisdom'
                },
                balance: {
                    idx: 5,
                    modifier: 'dexterity'
                },
                bluff: {
                    idx: 6,
                    modifier: 'charisma'
                },
                climb: {
                    idx: 7,
                    modifier: 'strength'
                },
                concentration: {
                    idx: 8,
                    modifier: 'constitution'
                },
                control_shape: {
                    idx: 9,
                    modifier: 'wisdom'
                },
                craft: {
                    idx: 10,
                    modifier: 'intelligence'
                },
                decipher_script: {
                    idx: 11,
                    modifier: 'intelligence'
                },
                diplomacy: {
                    idx: 12,
                    modifier: 'charisma'
                },
                disable_device: {
                    idx: 13,
                    modifier: 'intelligence'
                },
                disguise: {
                    idx: 14,
                    modifier: 'charisma'
                },
                escape_artist: {
                    idx: 15,
                    modifier: 'dexterity'
                },
                forgery: {
                    idx: 16,
                    modifier: 'intelligence'
                },
                gather_information: {
                    idx: 17,
                    modifier: 'charisma'
                },
                handle_animal: {
                    idx: 18,
                    modifier: 'charisma'
                },
                heal: {
                    idx: 19,
                    modifier: 'wisdom'
                },
                hide: {
                    idx: 20,
                    modifier: 'dexterity'
                },
                iaijutsu_focus: {
                    idx: 21,
                    modifier: 'charisma'
                },
                innuendo: {
                    idx: 22,
                    modifier: 'wisdom'
                },
                intimidate: {
                    idx: 23,
                    modifier: 'charisma'
                },
                intuit_direction: {
                    idx: 24,
                    modifier: 'wisdom'
                },
                jump: {
                    idx: 25,
                    modifier: 'strength'
                },
                arcana: {
                    idx: 26,
                    modifier: 'intelligence'
                },
                architecture_and_engineering: {
                    idx: 27,
                    modifier: 'intelligence'
                },
                barbarian_lore: {
                    idx: 28,
                    modifier: 'intelligence'
                },
                code_of_martial_honor: {
                    idx: 29,
                    modifier: 'intelligence'
                },
                dungeoneering: {
                    idx: 30,
                    modifier: 'intelligence'
                },
                geography: {
                    idx: 31,
                    modifier: 'intelligence'
                },
                history: {
                    idx: 32,
                    modifier: 'intelligence'
                },
                law: {
                    idx: 33,
                    modifier: 'intelligence'
                },
                local: {
                    idx: 34,
                    modifier: 'intelligence'
                },
                nature: {
                    idx: 35,
                    modifier: 'intelligence'
                },
                nobility_and_royalty: {
                    idx: 36,
                    modifier: 'intelligence'
                },
                psionics: {
                    idx: 37,
                    modifier: 'intelligence'
                },
                religion: {
                    idx: 38,
                    modifier: 'intelligence'
                },
                shadow_lands: {
                    idx: 39,
                    modifier: 'intelligence'
                },
                spirits: {
                    idx: 40,
                    modifier: 'intelligence'
                },
                tactics: {
                    idx: 41,
                    modifier: 'intelligence'
                },
                the_planes: {
                    idx: 42,
                    modifier: 'intelligence'
                },
                war: {
                    idx: 43,
                    modifier: 'intelligence'
                },
                weaponry: {
                    idx: 44,
                    modifier: 'intelligence'
                },
                listen: {
                    idx: 45,
                    modifier: 'wisdom'
                },
                lucid_dreaming: {
                    idx: 46,
                    modifier: 'wisdom'
                },
                martial_lore: {
                    idx: 47,
                    modifier: 'intelligence'
                },
                move_silently: {
                    idx: 48,
                    modifier: 'dexterity'
                },
                open_lock: {
                    idx: 49,
                    modifier: 'dexterity'
                },
                perform: {
                    idx: 50,
                    modifier: 'charisma'
                },
                pick_pocket: {
                    idx: 51,
                    modifier: 'dexterity'
                },
                profession: {
                    idx: 52,
                    modifier: 'wisdom'
                },
                psicraft: {
                    idx: 53,
                    modifier: 'intelligence'
                },
                read_lips: {
                    idx: 54,
                    modifier: 'intelligence'
                },
                remote_view: {
                    idx: 55,
                    modifier: 'intelligence'
                },
                ride: {
                    idx: 56,
                    modifier: 'dexterity'
                },
                scry: {
                    idx: 57,
                    modifier: 'intelligence'
                },
                search: {
                    idx: 58,
                    modifier: 'intelligence'
                },
                sense_motive: {
                    idx: 59,
                    modifier: 'wisdom'
                },
                sleight_of_hand: {
                    idx: 60,
                    modifier: 'dexterity'
                },
                speak_language: {
                    idx: 61,
                    modifier: false
                },
                spellcraft: {
                    idx: 62,
                    modifier: 'intelligence'
                },
                spot: {
                    idx: 63,
                    modifier: 'wisdom'
                },
                survival: {
                    idx: 64,
                    modifier: 'wisdom'
                },
                swim: {
                    idx: 65,
                    modifier: 'strength'
                },
                truespeak: {
                    idx: 66,
                    modifier: 'intelligence'
                },
                tumble: {
                    idx: 67,
                    modifier: 'dexterity'
                },
                use_magic_device: {
                    idx: 68,
                    modifier: 'charisma'
                },
                use_psionic_device: {
                    idx: 69,
                    modifier: 'charisma'
                },
                use_rope: {
                    idx: 70,
                    modifier: 'dexterity'
                },
                wilderness_lore:{
                    idx: 71,
                    modifier: 'wisdom'
                }
            }

            var knowledges = ['arcana', 'architecture_and_engineering', 'barbarian_lore', 'code_of_martial_honor', 'dungeoneering', 'geography', 'history', 'law', 'local', 'nature', 'nobility_and_royalty', 'psionics', 'religion', 'shadow_lands', 'spirits', 'tactics', 'the_planes', 'war', 'weaponry']

            for (var i = acp.length - 1; i >= 0; i--) {
                scope.skills[acp[i]].armorcheckpenalty = true
            }

            for (var i = trained.length - 1; i >= 0; i--) {
                scope.skills[trained[i]].trainedonly = true
            }

            for (var key in scope.skills) {
                scope.skills[key].name = toTitleCase(key.split('_').join(' '))
                scope.skills[key].idx = sortedskills[key].idx
                scope.skills[key].modifier = sortedskills[key].modifier
            }

            for (var i = knowledges.length - 1; i >= 0; i--) {
                scope.skills[knowledges[i]].name = scope.skills[knowledges[i]].name
            }

            scope.recalculate()

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
