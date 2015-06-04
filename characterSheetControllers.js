eastGate.controller("characterSheetController", function ($scope) {
	$scope.hello = 'hello'
})

eastGate.controller("playerStats", function ($scope) {
	$scope.characterStats = {
		CharacterName: "Sir Addon Vance",
		Player: "James Nissenbaum",
		ClassLevel: [{
			Class: "Fighter",
			Level: 5
		},
		{
			Class: "Mythic Exemplar",
			Level: 7
		}],
		Race: "Human",
		Type: null,
		Subtype: null,
		Deity: null,
		Alignment: "Lawful Good",
		Size: "Medium",
		Age: 30,
		Gender: "Male",
		Height: 77,
		Weight: 270,
		Eyes: "Brown",
		Hair: "Black",
		Skin: "Fair"
	}
})

eastGate.controller("abilityScores", function ($scope) {
	/*Str, Dex, Con, Int, Wis, Cha
	*/
	$scope.stats = {
		StrengthScore: 10, 
		StrengthModifier: 0,
		DexterityScore: 10,
		DexterityModifier: 0,
		ConstitutionScore: 10,
		ConstitutionModifier: 0,
		IntelligenceScore: 10,
		IntelligenceModifier: 0,
		WisdomScore: 10,
		WisdomModifier: 0,
		CharismaScore: 10,
		CharismaModifier: 0
	}
})

eastGate.controller("combatStats", function ($scope) {
	/*Armor Class (Touch, Flat-footed), Hit Points, Damage Reduction, Initiative, Saves, Base Attack Bonus,
	Spell Resistance, Grapple, Speed
	*/
	$scope.stats = {
		ArmorClass: 10,
		TouchArmorClass: 10,
		FlatFootedArmorClass: 10,
		HitPointsMax: 10,
		HitPointsCurrent: 10,
		DamageReduction: 0,
		Initiative: 0,
		Saves: 0,
		BaseAttackBonus: 0,
		SpellResistance: 0
	}
})

eastGate.controller("skills", function ($scope) {
	/*
	*/
	$scope.stats = {

	}
})

eastGate.controller("attacks", function ($scope) {
	/*
	*/
	$scope.stats = {

	}
})

eastGate.controller("inventory", function ($scope) {
	/*
	Possessions, Carrying Capacity, Containers, Wealth
	*/
	$scope.stats = {

	}
})

eastGate.controller("feats", function ($scope) {
	/*
	*/
	$scope.stats = {

	}
})

eastGate.controller("specialAbilities", function ($scope) {
	/*
	*/
	$scope.stats = {

	}
})

eastGate.controller("classFeatures", function ($scope) {
	/*
	*/
	$scope.stats = {

	}
})

eastGate.controller("spellsAndInfusions", function ($scope) {
	/*
	Spell Save, Arcane Spell Failure, Conditional Modifiers, Speciality School, Prohibited Schools,
	Spell Levels (Spells known, Spell Save DC, Spells/Day, Bonus Spells)
	*/
	$scope.stats = {

	}
})

eastGate.controller("armorProtectiveItems", function ($scope) {
	/*
	Armor, Shield, Protective Items
	*/
	$scope.stats = {

	}
})

eastGate.controller("miscStats", function ($scope) {
	//Racial Traits, Languages, Reigon of Origin, Affiliations and Enemies
	$scope.stats = {

	}
})
