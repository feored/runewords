export interface Runeword {
	name: string;
	runes: string[];
	bases: string[];
	bases_d2r: string[];
	d2r_only: boolean;
	ladder: {
		d2lod: boolean;
		d2r: boolean;
	};
	levelreq: number;
	sockets: 2 | 3 | 4 | 5 | 6;
	stats: Record<string, string[]>;
	version: '1.09' | '1.10' | '1.11' | '2.4' | '2.6';
}

export const RUNEWORDS: Runeword[] = [
	{
		bases: ['Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 21,
		name: "Ancient's Pledge",
		runes: ['Ral', 'Ort', 'Tal'],
		sockets: 3,
		stats: {
			all: [
				'+50% Enhanced Defense',
				'Cold Resist +43%',
				'Fire Resist +48%',
				'Lightning Resist +48%',
				'Poison Resist +48%',
				'10% Damage Goes To Mana'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Clubs', 'Hammers', 'Maces'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 35,
		name: 'Black',
		runes: ['Thul', 'Io', 'Nef'],
		sockets: 3,
		stats: {
			all: [
				'+120% Enhanced Damage',
				'40% Chance Of Crushing Blow',
				'+200 To Attack Rating',
				'Adds 3-14 Cold Damage - Cold Duration 3 Seconds',
				'+10 To Vitality',
				'15% Increased Attack Speed',
				'Knockback',
				'Magic Damage Reduced By 2',
				'Level 4 Corpse Explosion (12 Charges)'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Melee Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 65,
		name: 'Fury',
		runes: ['Jah', 'Gul', 'Eth'],
		sockets: 3,
		stats: {
			all: [
				'+209% Enhanced Damage',
				'40% Increased Attack Speed',
				'Prevent Monster Heal',
				'66% Chance Of Open Wounds',
				'33% Deadly Strike',
				"Ignore Target's Defense",
				'-25% Target Defense',
				'20% Bonus To Attack Rating',
				'6% Life Stolen Per Hit',
				'+5 To Frenzy (Barbarian Only)'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Scepters'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 24,
		name: 'Holy Thunder',
		runes: ['Eth', 'Ral', 'Ort', 'Tal'],
		sockets: 4,
		stats: {
			all: [
				'+60% Enhanced Damage',
				'-25% Target Defense',
				'Adds 5-30 Fire Damage',
				'Adds 21-110 Lightning Damage',
				'+75 Poison Damage Over 5 Seconds',
				'+10 To Maximum Damage',
				'Lightning Resistance +60%',
				'+5 To Maximum Lightning Resistance',
				'+3 To Holy Shock (Paladin Only)',
				'Level 7 Chain Lightning (60 Charges)'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Melee Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 27,
		name: 'Honor',
		runes: ['Amn', 'El', 'Ith', 'Tir', 'Sol'],
		sockets: 5,
		stats: {
			all: [
				'+160% Enhanced Damage',
				'+9 To Minimum Damage',
				'+9 To Maximum Damage',
				'25% Deadly Strike',
				'+250 To Attack Rating',
				'+1 to All Skills',
				'7% Life Stolen Per Hit',
				'Replenish Life +10',
				'+10 To Strength',
				'+1 To Light Radius',
				'+2 To Mana After Each Kill'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Swords', 'Scepters'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 25,
		name: "King's Grace",
		runes: ['Amn', 'Ral', 'Thul'],
		sockets: 3,
		stats: {
			all: [
				'+100% Enhanced Damage',
				'+100% Damage To Demons',
				'+50% Damage To Undead',
				'Adds 5-30 Fire Damage',
				'Adds 3-14 Cold Damage - 3 Second Duration',
				'+150 To Attack Rating',
				'+100 To Attack Rating Against Demons',
				'+100 To Attack Rating Against Undead',
				'7% Life Stolen Per Hit'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Staves'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 19,
		name: 'Leaf',
		runes: ['Tir', 'Ral'],
		sockets: 2,
		stats: {
			all: [
				'Adds 5-30 Fire Damage',
				'+3 To Fire Skills',
				'+3 To Fire Bolt (Sorceress Only)',
				'+3 To Inferno (Sorceress Only)',
				'+3 To Warmth (Sorceress Only)',
				'+2 To Mana After Each Kill',
				'+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)',
				'Cold Resist +33%'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 41,
		name: 'Lionheart',
		runes: ['Hel', 'Lum', 'Fal'],
		sockets: 3,
		stats: {
			all: [
				'+20% Enhanced Damage',
				'Requirements -15%',
				'+25 To Strength',
				'+10 To Energy',
				'+20 To Vitality',
				'+15 To Dexterity',
				'+50 To Life',
				'All Resistances +30'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 27,
		name: 'Lore',
		runes: ['Ort', 'Sol'],
		sockets: 2,
		stats: {
			all: [
				'+1 To All Skill Levels',
				'+10 To Energy',
				'+2 To Mana After Each Kill',
				'Lightning Resist +30%',
				'Damage Reduced By 7',
				'+2 To Light Radius'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Melee Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 15,
		name: 'Malice',
		runes: ['Ith', 'El', 'Eth'],
		sockets: 3,
		stats: {
			all: [
				'+33% Enhanced Damage',
				'+9 To Maximum Damage',
				'100% Chance Of Open Wounds',
				'-25% Target Defense',
				'-100 To Monster Defense Per Hit',
				'Prevent Monster Heal',
				'+50 To Attack Rating',
				'Drain Life -5'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 39,
		name: 'Melody',
		runes: ['Shael', 'Ko', 'Nef'],
		sockets: 3,
		stats: {
			all: [
				'+50% Enhanced Damage',
				'+300% Damage To Undead',
				'+3 To Bow and Crossbow Skills (Amazon Only)',
				'+3 To Critical Strike (Amazon Only)',
				'+3 To Dodge (Amazon Only)',
				'+3 To Slow Missiles (Amazon Only)',
				'20% Increased Attack Speed',
				'+10 To Dexterity',
				'Knockback'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Staves'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 37,
		name: 'Memory',
		runes: ['Lum', 'Io', 'Sol', 'Eth'],
		sockets: 4,
		stats: {
			all: [
				'+3 to Sorceress Skill Levels',
				'33% Faster Cast Rate',
				'Increase Maximum Mana 20%',
				'+3 Energy Shield (Sorceress Only)',
				'+2 Static Field (Sorceress Only)',
				'+10 To Energy',
				'+10 To Vitality',
				'+9 To Minimum Damage',
				'-25% Target Defense',
				'Magic Damage Reduced By 7',
				'+50% Enhanced Defense'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 13,
		name: 'Nadir',
		runes: ['Nef', 'Tir'],
		sockets: 2,
		stats: {
			all: [
				'+50% Enhanced Defense',
				'+10 Defense',
				'+30 Defense vs. Missile',
				'Level 13 Cloak of Shadows (9 Charges)',
				'+2 To Mana After Each Kill',
				'+5 To Strength',
				'-33% Extra Gold From Monsters',
				'-3 To Light Radius'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 27,
		name: 'Radiance',
		runes: ['Nef', 'Sol', 'Ith'],
		sockets: 3,
		stats: {
			all: [
				'+75% Enhanced Defense',
				'+30 Defense Vs. Missile',
				'+10 To Energy',
				'+10 To Vitality',
				'15% Damage Goes To Mana',
				'Magic Damage Reduced By 3',
				'+33 To Mana',
				'Damage Reduced By 7',
				'+5 To Light Radius'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 29,
		name: 'Rhyme',
		runes: ['Shael', 'Eth'],
		sockets: 2,
		stats: {
			all: [
				'20% Increased Chance of Blocking',
				'40% Faster Block Rate',
				'All Resistances +25',
				'Regenerate Mana 15%',
				'Cannot Be Frozen',
				'50% Extra Gold From Monsters',
				'25% Better Chance Of Getting Magic Items'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 55,
		name: 'Silence',
		runes: ['Dol', 'Eld', 'Hel', 'Ist', 'Tir', 'Vex'],
		sockets: 6,
		stats: {
			all: [
				'200% Enhanced Damage',
				'+75% Damage To Undead',
				'Requirements -20%',
				'20% Increased Attack Speed',
				'+50 To Attack Rating Against Undead',
				'+2 To All Skills',
				'All Resistances +75',
				'20% Faster Hit Recovery',
				'11% Mana Stolen Per Hit',
				'Hit Causes Monster To Flee 25%',
				'Hit Blinds Target +33',
				'+2 To Mana After Each Kill',
				'30% Better Chance Of Getting Magic Items'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 37,
		name: 'Smoke',
		runes: ['Nef', 'Lum'],
		sockets: 2,
		stats: {
			all: [
				'+75% Enhanced Defense',
				'+280 Defense Vs. Missile',
				'All Resistances +50',
				'20% Faster Hit Recovery',
				'Level 6 Weaken (18 Charges)',
				'+10 To Energy',
				'-1 To Light Radius'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 17,
		name: 'Stealth',
		runes: ['Tal', 'Eth'],
		sockets: 2,
		stats: {
			all: [
				'Magic Damage Reduced By 3',
				'+6 To Dexterity',
				'+15 To Maximum Stamina',
				'Poison Resist +30%',
				'Regenerate Mana 15%',
				'25% Faster Run/Walk',
				'25% Faster Cast Rate',
				'25% Faster Hit Recovery'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Swords', 'Axes', 'Maces'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 13,
		name: 'Steel',
		runes: ['Tir', 'El'],
		sockets: 2,
		stats: {
			all: [
				'20% Enhanced Damage',
				'+3 To Minimum Damage',
				'+3 To Maximum Damage',
				'+50 To Attack Rating',
				'50% Chance Of Open Wounds',
				'25% Increased Attack Speed',
				'+2 To Mana After Each Kill',
				'+1 To Light Radius'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Melee Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 25,
		name: 'Strength',
		runes: ['Amn', 'Tir'],
		sockets: 2,
		stats: {
			all: [
				'35% Enhanced Damage',
				'25% Chance Of Crushing Blow',
				'7% Life Stolen Per Hit',
				'+2 To Mana After Each Kill',
				'+20 To Strength',
				'+10 To Vitality'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 49,
		name: 'Venom',
		runes: ['Tal', 'Dol', 'Mal'],
		sockets: 3,
		stats: {
			all: [
				'Hit Causes Monster To Flee 25%',
				'Prevent Monster Heal',
				"Ignore Target's Defense",
				'7% Mana Stolen Per Hit',
				'Level 15 Poison Explosion (27 Charges)',
				'Level 13 Poison Nova (11 Charges)',
				'+273 Poison Damage Over 6 seconds'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 43,
		name: 'Wealth',
		runes: ['Lem', 'Ko', 'Tir'],
		sockets: 3,
		stats: {
			all: [
				'300% Extra Gold From Monsters',
				'100% Better Chance Of Getting Magic Items',
				'+2 To Mana After Each Kill',
				'+10 To Dexterity'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Wands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 35,
		name: 'White',
		runes: ['Dol', 'Io'],
		sockets: 2,
		stats: {
			all: [
				'Hit Causes Monster To Flee 25%',
				'+10 To Vitality',
				'+3 To Poison And Bone Skills (Necromancer Only)',
				'+3 To Bone Armor (Necromancer Only)',
				'+2 To Bone Spear (Necromancer Only)',
				'+4 To Skeleton Mastery (Necromancer Only)',
				'Magic Damage Reduced By 4',
				'20% Faster Cast Rate',
				'+13 To Mana'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 21,
		name: 'Zephyr',
		runes: ['Ort', 'Eth'],
		sockets: 2,
		stats: {
			all: [
				'+33% Enhanced Damage',
				'+66 To Attack Rating',
				'Adds 1-50 Lightning Damage',
				'-25% Target Defense',
				'+25 Defense',
				'25% Faster Run/Walk',
				'25% Increased Attack Speed',
				'7% Chance To Cast Level 1 Twister When Struck'
			]
		},
		version: '1.09'
	},
	{
		bases: ['Axes', 'Scepters', 'Hammers'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 63,
		name: 'Beast',
		runes: ['Ber', 'Tir', 'Um', 'Mal', 'Lum'],
		sockets: 5,
		stats: {
			all: [
				'Level 9 Fanaticism Aura When Equipped',
				'+40% Increased Attack Speed',
				'+240-270% Enhanced Damage (varies)',
				'20% Chance of Crushing Blow',
				'25% Chance of Open Wounds',
				'+3 To Werebear',
				'+3 To Lycanthropy',
				'Prevent Monster Heal',
				'+25-40 To Strength (varies)',
				'+10 To Energy',
				'+2 To Mana After Each Kill',
				'Level 13 Summon Grizzly (5 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 61,
		name: 'Bramble',
		runes: ['Ral', 'Ohm', 'Sur', 'Eth'],
		sockets: 4,
		stats: {
			all: [
				'Level 15-21 Thorns Aura When Equipped (varies)',
				'+50% Faster Hit Recovery',
				'+25-50% To Poison Skill Damage (varies)',
				'+300 Defense',
				'Increase Maximum Mana 5%',
				'Regenerate Mana 15%',
				'+5% To Maximum Cold Resist',
				'Fire Resist +30%',
				'Poison Resist +100%',
				'+13 Life After Each Kill',
				'Level 13 Spirit of Barbs (33 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 69,
		name: 'Breath of the Dying',
		runes: ['Vex', 'Hel', 'El', 'Eld', 'Zod', 'Eth'],
		sockets: 6,
		stats: {
			all: [
				'50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy',
				'Indestructible',
				'+60% Increased Attack Speed',
				'+350-400% Enhanced Damage (varies)',
				'+200% Damage To Undead',
				'-25% Target Defense',
				'+50 To Attack Rating',
				'+50 To Attack Rating Against Undead',
				'7% Mana Stolen Per Hit',
				'12-15% Life Stolen Per Hit (varies)',
				'Prevent Monster Heal',
				'+30 To All Attributes',
				'+1 To Light Radius',
				'Requirements -20%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 57,
		name: 'Call To Arms',
		runes: ['Amn', 'Ral', 'Mal', 'Ist', 'Ohm'],
		sockets: 5,
		stats: {
			all: [
				'+1 To All Skills',
				'+40% Increased Attack Speed',
				'+250-290% Enhanced Damage (varies)',
				'Adds 5-30 Fire Damage',
				'7% Life Stolen Per Hit',
				'+2-6 To Battle Command (varies)',
				'+1-6 To Battle Orders (varies)',
				'+1-4 To Battle Cry (varies)',
				'Prevent Monster Heal',
				'Replenish Life +12',
				'30% Better Chance of Getting Magic Items'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Assassin Katars'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 57,
		name: 'Chaos',
		runes: ['Fal', 'Ohm', 'Um'],
		sockets: 3,
		stats: {
			all: [
				'9% Chance To Cast Level 11 Frozen Orb On Striking',
				'11% Chance To Cast Level 9 Charged Bolt On Striking',
				'+35% Increased Attack Speed',
				'+290-340% Enhanced Damage (varies)',
				'Adds 216-471 Magic Damage',
				'25% Chance of Open Wounds',
				'+1 To Whirlwind',
				'+10 To Strength',
				'+15 Life After Each Demon Kill'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 63,
		name: 'Chains of Honor',
		runes: ['Dol', 'Um', 'Ber', 'Ist'],
		sockets: 4,
		stats: {
			all: [
				'+2 To All Skills',
				'+200% Damage To Demons',
				'+100% Damage To Undead',
				'8% Life Stolen Per Hit',
				'+70% Enhanced Defense',
				'+20 To Strength',
				'Replenish Life +7',
				'All Resistances +65',
				'Damage Reduced By 8%',
				'25% Better Chance of Getting Magic Items'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Axes', 'Swords', 'Polearms'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 48,
		name: 'Crescent Moon',
		runes: ['Shael', 'Um', 'Tir'],
		sockets: 3,
		stats: {
			all: [
				'10% Chance To Cast Level 17 Chain Lightning On Striking',
				'7% Chance To Cast Level 13 Static Field On Striking',
				'+20% Increased Attack Speed',
				'+180-220% Enhanced Damage (varies)',
				"Ignore Target's Defense",
				'-35% To Enemy Lightning Resistance',
				'25% Chance of Open Wounds',
				'+9-11 Magic Absorb (varies)',
				'+2 To Mana After Each Kill',
				'Level 18 Summon Spirit Wolf (30 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 51,
		name: 'Delirium',
		runes: ['Lem', 'Ist', 'Io'],
		sockets: 3,
		stats: {
			all: [
				'1% Chance To Cast Level 50 Delirium (morph) When Struck',
				'6% Chance To Cast Level 14 Mind Blast When Struck',
				'14% Chance To Cast Level 13 Terror When Struck',
				'11% Chance To Cast Level 18 Confuse On Striking',
				'+2 To All Skills',
				'+261 Defense',
				'+10 To Vitality',
				'50% Extra Gold From Monsters',
				'25% Better Chance of Getting Magic Items',
				'Level 17 Attract (60 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Axes', 'Polearms', 'Hammers'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 67,
		name: 'Doom',
		runes: ['Hel', 'Ohm', 'Um', 'Lo', 'Cham'],
		sockets: 5,
		stats: {
			all: [
				'5% Chance To Cast Level 18 Volcano On Striking',
				'Level 12 Holy Freeze Aura When Equipped',
				'+2 To All Skills',
				'+45% Increased Attack Speed',
				'+330-370% Enhanced Damage (varies)',
				'-(40-60)% To Enemy Cold Resistance (varies)',
				'20% Deadly Strike',
				'25% Chance of Open Wounds',
				'Prevent Monster Heal',
				'Freezes Target +3',
				'Requirements -20%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 47,
		name: 'Duress',
		runes: ['Shael', 'Um', 'Thul'],
		sockets: 3,
		stats: {
			all: [
				'+40% Faster Hit Recovery',
				'+10-20% Enhanced Damage (varies)',
				'Adds 37-133 Cold Damage 2 sec. Duration (Normal)',
				'15% Chance of Crushing Blow',
				'33% Chance of Open Wounds',
				'+150-200% Enhanced Defense (varies)',
				'-20% Slower Stamina Drain',
				'Cold Resist +45%',
				'Lightning Resist +15%',
				'Fire Resist +15%',
				'Poison Resist +15%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 65,
		name: 'Enigma',
		runes: ['Jah', 'Ith', 'Ber'],
		sockets: 3,
		stats: {
			all: [
				'+2 To All Skills',
				'+45% Faster Run/Walk',
				'+1 To Teleport',
				'+750-775 Defense (varies)',
				'+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)',
				'Increase Maximum Life 5%',
				'Damage Reduced By 8%',
				'+14 Life After Each Kill',
				'15% Damage Taken Goes To Mana',
				'+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Melee Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 63,
		name: 'Eternity',
		runes: ['Amn', 'Ber', 'Ist', 'Sol', 'Sur'],
		sockets: 5,
		stats: {
			all: [
				'Indestructible',
				'+260-310% Enhanced Damage (varies)',
				'+9 To Minimum Damage',
				'7% Life Stolen Per Hit',
				'20% Chance of Crushing Blow',
				'Hit Blinds Target',
				'Slows Target By 33%',
				'Regenerate Mana 16%',
				'Replenish Life +16',
				'Cannot Be Frozen',
				'30% Better Chance Of Getting Magic Items',
				'Level 8 Revive (88 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Paladin Shields'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 57,
		name: 'Exile',
		runes: ['Vex', 'Ohm', 'Ist', 'Dol'],
		sockets: 4,
		stats: {
			all: [
				'15% Chance To Cast Level 5 Life Tap On Striking',
				'Level 13-16 Defiance Aura When Equipped (varies)',
				'+2 To Offensive Auras (Paladin Only)',
				'+30% Faster Block Rate',
				'Freezes Target',
				'+220-260% Enhanced Defense (varies)',
				'Replenish Life +7',
				'+5% To Maximum Cold Resist',
				'+5% To Maximum Fire Resist',
				'25% Better Chance Of Getting Magic Items',
				'Repairs 1 Durability in 4 Seconds'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Axes', 'Hammers'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 65,
		name: 'Famine',
		runes: ['Fal', 'Ohm', 'Ort', 'Jah'],
		sockets: 4,
		stats: {
			all: [
				'+30% Increased Attack Speed',
				'+320-370% Enhanced Damage (varies)',
				"Ignore Target's Defense",
				'Adds 180-200 Magic Damage',
				'Adds 50-200 Fire Damage',
				'Adds 51-250 Lightning Damage',
				'Adds 50-200 Cold Damage',
				'12% Life Stolen Per Hit',
				'Prevent Monster Heal',
				'+10 To Strength'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 47,
		name: 'Gloom',
		runes: ['Fal', 'Um', 'Pul'],
		sockets: 3,
		stats: {
			all: [
				'15% Chance To Cast Level 3 Dim Vision When Struck',
				'+10% Faster Hit Recovery',
				'+200-260% Enhanced Defense (varies)',
				'+10 To Strength',
				'All Resistances +45',
				'Half Freeze Duration',
				'5% Damage Taken Goes To Mana',
				'-3 To Light Radius'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 67,
		name: 'Hand of Justice',
		runes: ['Sur', 'Cham', 'Amn', 'Lo'],
		sockets: 4,
		stats: {
			all: [
				'100% Chance To Cast Level 36 Blaze When You Level-Up',
				'100% Chance To Cast Level 48 Meteor When You Die',
				'Level 16 Holy Fire Aura When Equipped',
				'+33% Increased Attack Speed',
				'+280-330% Enhanced Damage (varies)',
				"Ignore Target's Defense",
				'7% Life Stolen Per Hit',
				'-20% To Enemy Fire Resistance',
				'20% Deadly Strike',
				'Hit Blinds Target',
				'Freezes Target +3'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Staves', 'Maces'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 55,
		name: 'Heart of the Oak',
		runes: ['Ko', 'Vex', 'Pul', 'Thul'],
		sockets: 4,
		stats: {
			all: [
				'+3 To All Skills',
				'+40% Faster Cast Rate',
				'+75% Damage To Demons',
				'+100 To Attack Rating Against Demons',
				'Adds 3-14 Cold Damage]}, 3 sec. Duration (Normal)',
				'7% Mana Stolen Per Hit',
				'+10 To Dexterity',
				'Replenish Life +20',
				'Increase Maximum Mana 15%',
				'All Resistances +30-40 (varies)',
				'Level 4 Oak Sage (25 Charges)',
				'Level 14 Raven (60 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Axes'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 53,
		name: 'Kingslayer',
		runes: ['Mal', 'Um', 'Gul', 'Fal'],
		sockets: 4,
		stats: {
			all: [
				'+30% Increased Attack Speed',
				'+230-270% Enhanced Damage (varies)',
				'-25% Target Defense',
				'20% Bonus To Attack Rating',
				'33% Chance of Crushing Blow',
				'50% Chance of Open Wounds',
				'+1 To Vengeance',
				'Prevent Monster Heal',
				'+10 To Strength',
				'40% Extra Gold From Monsters'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 43,
		name: 'Passion',
		runes: ['Dol', 'Ort', 'Eld', 'Lem'],
		sockets: 4,
		stats: {
			all: [
				'+25% Increased Attack Speed',
				'+160-210% Enhanced Damage (varies)',
				'50-80% Bonus To Attack Rating (varies)',
				'+75% Damage To Undead',
				'+50 To Attack Rating Against Undead',
				'Adds 1-50 Lightning Damage',
				'+1 To Berserk',
				'+1 To Zeal',
				'Hit Blinds Target +10',
				'Hit Causes Monster To Flee 25%',
				'75% Extra Gold From Monsters',
				'Level 3 Heart of Wolverine (12 Charges)',
				''
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 49,
		name: 'Prudence',
		runes: ['Mal', 'Tir'],
		sockets: 2,
		stats: {
			all: [
				'+25% Faster Hit Recovery',
				'+140-170% Enhanced Defense (varies)',
				'All Resistances +25-35 (varies)',
				'Damage Reduced by 3',
				'Magic Damage Reduced by 17',
				'+2 To Mana After Each Kill',
				'+1 To Light Radius',
				'Repairs Durability 1 In 4 Seconds'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 49,
		name: 'Sanctuary',
		runes: ['Ko', 'Ko', 'Mal'],
		sockets: 3,
		stats: {
			all: [
				'+20% Faster Hit Recovery',
				'+20% Faster Block Rate',
				'20% Increased Chance of Blocking',
				'+130-160% Enhanced Defense (varies)',
				'+250 Defense vs. Missile',
				'+20 To Dexterity',
				'All Resistances +50-70 (varies)',
				'Magic Damage Reduced By 7',
				'Level 12 Slow Missiles (60 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 37,
		name: 'Splendor',
		runes: ['Eth', 'Lum'],
		sockets: 2,
		stats: {
			all: [
				'+1 To All Skills',
				'+10% Faster Cast Rate',
				'+20% Faster Block Rate',
				'+60-100% Enhanced Defense (varies)',
				'+10 To Energy',
				'Regenerate Mana 15%',
				'50% Extra Gold From Monsters',
				'20% Better Chance of Getting Magic Items',
				'+3 To Light Radius'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 47,
		name: 'Stone',
		runes: ['Shael', 'Um', 'Pul', 'Lum'],
		sockets: 4,
		stats: {
			all: [
				'+60% Faster Hit Recovery',
				'+250-290% Enhanced Defense (varies)',
				'+300 Defense Vs. Missile',
				'+16 To Strength',
				'+16 To Vitality',
				'+10 To Energy',
				'All Resistances +15',
				'Level 16 Molten Boulder (80 Charges)',
				'Level 16 Clay Golem (16 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Melee Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 61,
		name: 'Wind',
		runes: ['Sur', 'El'],
		sockets: 2,
		stats: {
			all: [
				'10% Chance To Cast Level 9 Tornado On Striking',
				'+20% Faster Run/Walk',
				'+40% Increased Attack Speed',
				'+15% Faster Hit Recovery',
				'+120-160% Enhanced Damage (varies)',
				'-50% Target Defense',
				'+50 To Attack Rating',
				'Hit Blinds Target',
				'+1 To Light Radius',
				'Level 13 Twister (127 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Brand',
		runes: ['Jah', 'Lo', 'Mal', 'Gul'],
		sockets: 4,
		stats: {
			all: [
				'35% Chance To Cast Level 14 Amplify Damage When Struck',
				'100% Chance To Cast Level 18 Bone Spear On Striking',
				'+260-340% Enhanced Damage (varies)',
				"Ignore Target's Defense",
				'20% Bonus to Attack Rating',
				'+280-330% Damage To Demons (varies)',
				'20% Deadly Strike',
				'Prevent Monster Heal',
				'Knockback',
				'Fires Explosive Arrows or Bolts (15)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Axes'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 55,
		name: 'Death',
		runes: ['Hel', 'El', 'Vex', 'Ort', 'Gul'],
		sockets: 5,
		stats: {
			all: [
				'100% Chance To Cast Level 44 Chain Lightning When You Die',
				'25% Chance To Cast Level 18 Glacial Spike On Attack',
				'Indestructible',
				'+300-385% Enhanced Damage (varies)',
				'20% Bonus To Attack Rating',
				'+50 To Attack Rating',
				'Adds 1-50 Lightning Damage',
				'7% Mana Stolen Per Hit',
				'50% Chance of Crushing Blow',
				'+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)',
				'+1 To Light Radius',
				'Level 22 Blood Golem  (15 Charges)',
				'Requirements -20%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Polearms', 'Swords'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Destruction',
		runes: ['Vex', 'Lo', 'Ber', 'Jah', 'Ko'],
		sockets: 5,
		stats: {
			all: [
				'23% Chance To Cast Level 12 Volcano On Striking',
				'5% Chance To Cast Level 23 Molten Boulder On Striking',
				'100% Chance To Cast level 45 Meteor When You Die',
				'15% Chance To Cast Level 22 Nova On Attack',
				'+350% Enhanced Damage',
				"Ignore Target's Defense",
				'Adds 100-180 Magic Damage',
				'7% Mana Stolen Per Hit',
				'20% Chance Of Crushing Blow',
				'20% Deadly Strike',
				'Prevent Monster Heal',
				'+10 To Dexterity'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors', 'Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 61,
		name: 'Dragon',
		runes: ['Sur', 'Lo', 'Sol'],
		sockets: 3,
		stats: {
			all: [
				'20% Chance to Cast Level 18 Venom When Struck',
				'12% Chance To Cast Level 15 Hydra On Striking',
				'Level 14 Holy Fire Aura When Equipped',
				'+360 Defense',
				'+230 Defense Vs. Missile',
				'+3-5 To All Attributes (varies)',
				'+0.375-37.125 To Strength (Based on Character Level)',
				'Increase Maximum Mana 5% (Armor Only)',
				'+50 To Mana (Shields Only)',
				'+5% To Maximum Lightning Resist',
				'Damage Reduced by 7'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Helms', 'Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Dream',
		runes: ['Io', 'Jah', 'Pul'],
		sockets: 3,
		stats: {
			all: [
				'10% Chance To Cast Level 15 Confuse When Struck',
				'Level 15 Holy Shock Aura When Equipped',
				'+20-30% Faster Hit Recovery (varies)',
				'+30% Enhanced Defense',
				'+150-220 Defense (varies)',
				'+10 To Vitality',
				'Increase Maximum Life 5% (Helms Only)',
				'+50 To Life (Shields Only)',
				'+0.625-61.875 To Mana (Based On Character Level)',
				'All Resistances +5-20 (varies)',
				'12-25% Better Chance of Getting Magic Items (varies)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 25,
		name: 'Edge',
		runes: ['Tir', 'Tal', 'Amn'],
		sockets: 3,
		stats: {
			all: [
				'Level 15 Thorns Aura When Equipped',
				'+35% Increased Attack Speed',
				'+320-380% Damage To Demons (varies)',
				'+280% Damage To Undead',
				'+75 Poison Damage Over 5 Seconds',
				'7% Life Stolen Per Hit',
				'Prevent Monster Heal',
				'+5-10 To All Attributes (varies)',
				'+2 To Mana After Each Kill',
				'Reduces All Vendor Prices 15%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Faith',
		runes: ['Ohm', 'Jah', 'Lem', 'Eld'],
		sockets: 4,
		stats: {
			all: [
				'Level 12-15 Fanaticism Aura When Equipped (varies)',
				'+1-2 To All Skills (varies)',
				'+330% Enhanced Damage',
				"Ignore Target's Defense",
				'300% Bonus To Attack Rating',
				'+75% Damage To Undead',
				'+50 To Attack Rating Against Undead',
				'+120 Fire Damage',
				'All Resistances +15',
				'10% Reanimate As: Returned',
				'75% Extra Gold From Monsters'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Weapons', 'Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 59,
		name: 'Fortitude',
		runes: ['El', 'Sol', 'Dol', 'Lo'],
		sockets: 4,
		stats: {
			Weapons: [
				'20% Chance To Cast Level 15 Chilling Armor when Struck',
				'+25% Faster Cast Rate',
				'+300% Enhanced Damage',
				'+9 To Minimum Damage',
				'+50 To Attack Rating',
				'20% Deadly Strike',
				'Hit Causes Monster To Flee 25%',
				'+200% Enhanced Defense',
				'+X To Life (Based on Character Level)',
				'All Resistances +25-30 (varies)',
				'12% Damage Taken Goes To Mana',
				'+1 To Light Radius'
			],
			'Body Armors': [
				'20% Chance To Cast Level 15 Chilling Armor when Struck',
				'+25% Faster Cast Rate',
				'+300% Enhanced Damage',
				'+200% Enhanced Defense',
				'+15 Defense',
				'+X To Life (Based on Character Level)',
				'Replenish Life +7',
				'+5% To Maximum Lightning Resist',
				'All Resistances +25-30 (varies)',
				'Damage Reduced By 7',
				'12% Damage Taken Goes To Mana',
				'+1 To Light Radius'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Axes'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 59,
		name: 'Grief',
		runes: ['Eth', 'Tir', 'Lo', 'Mal', 'Ral'],
		sockets: 5,
		stats: {
			all: [
				'35% Chance To Cast Level 15 Venom On Striking',
				'+30-40% Increased Attack Speed (varies)',
				'Damage +340-400 (varies)',
				"Ignore Target's Defense",
				'-25% Target Defense',
				'+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level) ',
				'Adds 5-30 Fire Damage',
				'-20-25% To Enemy Poison Resistance (varies)',
				'20% Deadly Strike',
				'Prevent Monster Heal',
				'+2 To Mana After Each Kill',
				'+10-15 Life After Each Kill (varies)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 39,
		name: 'Harmony',
		runes: ['Tir', 'Ith', 'Sol', 'Ko'],
		sockets: 4,
		stats: {
			all: [
				'Level 10 Vigor Aura When Equipped',
				'+200-275% Enhanced Damage (varies)',
				'+9 To Minimum Damage',
				'+9 To Maximum Damage',
				'Adds 55-160 Lightning Damage',
				'Adds 55-160 Fire Damage',
				'Adds 55-160 Cold Damage',
				'+2-6 To Valkyrie (varies)',
				'+10 To Dexterity',
				'Regenerate Mana 20%',
				'+2 To Mana After Each Kill',
				'+2 To Light Radius',
				'Level 20 Revive (25 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Ice',
		runes: ['Amn', 'Shael', 'Jah', 'Lo'],
		sockets: 4,
		stats: {
			all: [
				'100% Chance To Cast Level 40 Blizzard When You Level-up',
				'25% Chance To Cast Level 22 Frost Nova On Striking',
				'Level 18 Holy Freeze Aura When Equipped',
				'+20% Increased Attack Speed',
				'+140-210% Enhanced Damage (varies)',
				"Ignore Target's Defense",
				'+25-30% To Cold Skill Damage (varies)',
				'-20% To Enemy Cold Resistance',
				'7% Life Stolen Per Hit',
				'20% Deadly Strike',
				'3.125-309.375 Extra Gold From Monsters (Based on Character Level)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Polearms'],
		bases_d2r: ['Polearms', 'Spears', 'Amazon Spears'],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 63,
		name: 'Infinity',
		runes: ['Ber', 'Mal', 'Ber', 'Ist'],
		sockets: 4,
		stats: {
			all: [
				'50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy',
				'Level 12 Conviction Aura When Equipped',
				'+35% Faster Run/Walk',
				'+255-325% Enhanced Damage (varies)',
				'-(45-55)% To Enemy Lightning Resistance (varies)',
				'40% Chance of Crushing Blow',
				'Prevent Monster Heal',
				'0.5-49.5 To Vitality (Based on Character Level)',
				'30% Better Chance of Getting Magic Items',
				'Level 21 Cyclone Armor (30 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Polearms', 'Staves'],
		bases_d2r: ['Polearms', 'Staves', 'Amazon Bows', 'Bows', 'Crossbows'],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 27,
		name: 'Insight',
		runes: ['Ral', 'Tir', 'Tal', 'Sol'],
		sockets: 4,
		stats: {
			all: [
				'Level 12-17 Meditation Aura When Equipped (varies)',
				'+35% Faster Cast Rate',
				'+200-260% Enhanced Damage (varies)',
				'+9 To Minimum Damage',
				'180-250% Bonus to Attack Rating (varies)',
				'Adds 5-30 Fire Damage',
				'+75 Poison Damage Over 5 Seconds',
				'+1-6 To Critical Strike (varies)',
				'+5 To All Attributes',
				'+2 To Mana After Each Kill',
				'23% Better Chance of Getting Magic Items'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Hammers', 'Axes'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Last Wish',
		runes: ['Jah', 'Mal', 'Jah', 'Sur', 'Jah', 'Ber'],
		sockets: 6,
		stats: {
			all: [
				'6% Chance To Cast Level 11 Fade When Struck',
				'10% Chance To Cast Level 18 Life Tap On Striking',
				'20% Chance To Cast Level 20 Charged Bolt On Attack',
				'Level 17 Might Aura When Equipped',
				'+330-375% Enhanced Damage (varies)',
				"Ignore Target's Defense",
				'60-70% Chance of Crushing Blow (varies)',
				'Prevent Monster Heal',
				'Hit Blinds Target',
				'+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level) '
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Hammers', 'Scepters '],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 43,
		name: 'Lawbringer',
		runes: ['Amn', 'Lem', 'Ko'],
		sockets: 3,
		stats: {
			all: [
				'20% Chance To Cast Level 15 Decrepify On Striking',
				'Level 16-18 Sanctuary Aura When Equipped (varies)',
				'-50% Target Defense',
				'Adds 150-210 Fire Damage',
				'Adds 130-180 Cold Damage',
				'7% Life Stolen Per Hit',
				'Slain Monsters Rest In Peace',
				'+200-250 Defense Vs. Missile (varies)',
				'+10 To Dexterity',
				'75% Extra Gold From Monsters'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Axes', 'Maces'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 49,
		name: 'Oath',
		runes: ['Shael', 'Pul', 'Mal', 'Lum'],
		sockets: 4,
		stats: {
			all: [
				'30% Chance To Cast Level 20 Bone Spirit On Striking',
				'Indestructible',
				'+50% Increased Attack Speed',
				'+210-340% Enhanced Damage (varies)',
				'+75% Damage To Demons',
				'+100 To Attack Rating Against Demons',
				'Prevent Monster Heal',
				'+10 To Energy',
				'+10-15 Magic Absorb (varies)',
				'Level 16 Heart Of Wolverine (20 Charges)',
				'Level 17 Iron Golem (14 Charges)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Polearms'],
		bases_d2r: ['Amazon Spears', 'Polearms', 'Spears'],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 41,
		name: 'Obedience',
		runes: ['Hel', 'Ko', 'Thul', 'Eth', 'Fal'],
		sockets: 5,
		stats: {
			all: [
				'30% Chance To Cast Level 21 Enchant When You Kill An Enemy',
				'40% Faster Hit Recovery',
				'+370% Enhanced Damage',
				'-25% Target Defense',
				'Adds 3-14 Cold Damage 3 Second Duration (Normal)',
				'-25% To Enemy Fire Resistance',
				'40% Chance of Crushing Blow',
				'+200-300 Defense (varies)',
				'+10 To Strength',
				'+10 To Dexterity',
				'All Resistances +20-30 (varies)',
				'Requirements -20%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Weapons', 'Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 65,
		name: 'Phoenix',
		runes: ['Vex', 'Vex', 'Lo', 'Jah'],
		sockets: 4,
		stats: {
			Weapons: [
				'100% Chance To Cast level 40 Blaze When You Level-up',
				'40% Chance To Cast Level 22 Firestorm On Striking',
				'Level 10-15 Redemption Aura When Equipped (varies)',
				'+350-400% Enhanced Damage (varies)',
				"Ignores Target's Defense",
				'14% Mana Stolen Per Hit',
				'-28% To Enemy Fire Resistance',
				'20% Deadly Strike',
				'+350-400 Defense Vs. Missile (varies)',
				'+15-21 Fire Absorb (varies)'
			],
			'Off-hands': [
				'100% Chance To Cast level 40 Blaze When You Level-up',
				'40% Chance To Cast Level 22 Firestorm On Striking',
				'Level 10-15 Redemption Aura When Equipped (varies)',
				'+350-400 Defense Vs. Missile (varies)',
				'+350-400% Enhanced Damage (varies)',
				'-28% To Enemy Fire Resistance',
				'+50 To Life',
				'+5% To Maximum Lightning Resist',
				'+10% To Maximum Fire Resist',
				'+15-21 Fire Absorb (varies)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Polearms'],
		bases_d2r: ['Amazon Spears', 'Polearms', 'Spears'],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 67,
		name: 'Pride',
		runes: ['Cham', 'Sur', 'Io', 'Lo'],
		sockets: 4,
		stats: {
			all: [
				'25% Chance To Cast Level 17 Fire Wall When Struck',
				'Level 16-20 Concentration Aura When Equipped (varies)',
				'260-300% Bonus To Attack Rating (varies)',
				'+1-99% Damage To Demons (Based on Character Level)',
				'Adds 50-280 Lightning Damage',
				'20% Deadly Strike',
				'Hit Blinds Target',
				'Freezes Target +3',
				'+10 To Vitality',
				'Replenish Life +8',
				'1.875-185.625% Extra Gold From Monsters (Based on Character Level)'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Polearms', 'Scepters'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 53,
		name: 'Rift',
		runes: ['Hel', 'Ko', 'Lem', 'Gul'],
		sockets: 4,
		stats: {
			all: [
				'20% Chance To Cast Level 16 Tornado On Striking',
				'16% Chance To Cast Level 21 Frozen Orb On Attack',
				'20% Bonus To Attack Rating',
				'Adds 160-250 Magic Damage',
				'Adds 60-180 Fire Damage',
				'+5-10 To All Stats (varies)',
				'+10 To Dexterity',
				'38% Damage Taken Goes To Mana',
				'75% Extra Gold From Monsters',
				'Level 15 Iron Maiden (40 Charges)',
				'Requirements -20%'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Off-hands'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 25,
		name: 'Spirit',
		runes: ['Tal', 'Thul', 'Ort', 'Amn'],
		sockets: 4,
		stats: {
			Swords: [
				'+2 To All Skills',
				'+25-35% Faster Cast Rate (varies)',
				'+55% Faster Hit Recovery',
				'Adds 1-50 Lightning Damage',
				'Adds 3-14 Cold Damage 3 Second Duration (Normal)',
				'+75 Poison Damage Over 5 Seconds',
				'7% Life Stolen Per Hit',
				'+250 Defense Vs. Missile',
				'+22 To Vitality',
				'+89-112 To Mana (varies)',
				'+3-8 Magic Absorb (varies)'
			],
			'Off-hands': [
				'+2 To All Skills',
				'+25-35% Faster Cast Rate (varies)',
				'+55% Faster Hit Recovery',
				'+250 Defense Vs. Missile',
				'+22 To Vitality',
				'+89-112 To Mana (varies)',
				'Cold Resist +35%',
				'Lightning Resist +35%',
				'Poison Resist +35%',
				'+3-8 Magic Absorb (varies)',
				'Attacker Takes Damage of 14'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Swords', 'Maces'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 43,
		name: 'Voice of Reason',
		runes: ['Lem', 'Ko', 'El', 'Eld'],
		sockets: 4,
		stats: {
			all: [
				'15% Chance To Cast Level 13 Frozen Orb On Striking',
				'18% Chance To Cast Level 20 Ice Blast On Striking',
				'+50 To Attack Rating',
				'+220-350% Damage To Demons',
				'+355-375% Damage To Undead (varies)',
				'+50 To Attack Rating Against Undead',
				'Adds 100-220 Cold Damage',
				'-24% To Enemy Cold Resistance',
				'+10 To Dexterity',
				'Cannot Be Frozen',
				'75% Extra Gold From Monsters',
				'+1 To Light Radius'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: true,
			d2r: false
		},
		levelreq: 63,
		name: 'Wrath',
		runes: ['Pul', 'Lum', 'Ber', 'Mal'],
		sockets: 4,
		stats: {
			all: [
				'30% Chance To Cast Level 1 Decrepify On Striking',
				'5% Chance To Cast Level 10 Life Tap On Striking',
				'+375% Damage To Demons',
				'+100 To Attack Rating Against Demons',
				'+250-300% Damage To Undead (varies)',
				'Adds 85-120 Magic Damage',
				'Adds 41-240 Lightning Damage',
				'20% Chance of Crushing Blow',
				'Prevent Monster Heal',
				'+10 To Energy',
				'Cannot Be Frozen'
			]
		},
		version: '1.10'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 47,
		name: 'Bone',
		runes: ['Sol', 'Um', 'Um'],
		sockets: 3,
		stats: {
			all: [
				'15% Chance To Cast level 10 Bone Armor When Struck',
				'15% Chance To Cast level 10 Bone Spear On Striking',
				'+2 To Necromancer Skill Levels',
				'+100-150 To Mana (varies)',
				'All Resistances +30',
				'Damage Reduced By 7'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 45,
		name: 'Enlightenment',
		runes: ['Pul', 'Ral', 'Sol'],
		sockets: 3,
		stats: {
			all: [
				'5% Chance To Cast Level 15 Blaze When Struck',
				'5% Chance To Cast level 15 Fire Ball On Striking',
				'+2 To Sorceress Skill Levels',
				'+1 To Warmth',
				'+30% Enhanced Defense',
				'Fire Resist +30%',
				'Damage Reduced By 7'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 25,
		name: 'Myth',
		runes: ['Hel', 'Amn', 'Nef'],
		sockets: 3,
		stats: {
			all: [
				'3% Chance To Cast Level 1 Howl When Struck',
				'10% Chance To Cast Level 1 Taunt On Striking',
				'+2 To Barbarian Skill Levels',
				'+30 Defense Vs. Missile',
				'Replenish Life +10',
				'Attacker Takes Damage of 14',
				'Requirements -15%'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 29,
		name: 'Peace',
		runes: ['Shael', 'Thul', 'Amn'],
		sockets: 3,
		stats: {
			all: [
				'4% Chance To Cast Level 5 Slow Missiles When Struck',
				'2% Chance To Cast level 15 Valkyrie On Striking',
				'+2 To Amazon Skill Levels',
				'+20% Faster Hit Recovery',
				'+2 To Critical Strike',
				'Cold Resist +30%',
				'Attacker Takes Damage of 14'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 53,
		name: 'Principle',
		runes: ['Ral', 'Gul', 'Eld'],
		sockets: 3,
		stats: {
			all: [
				'100% Chance To Cast Level 5 Holy Bolt On Striking',
				'+2 To Paladin Skill Levels',
				'+50% Damage to Undead',
				'+100-150 To Life (varies)',
				'15% Slower Stamina Drain',
				'+5% To Maximum Poison Resist',
				'Fire Resist +30%'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 49,
		name: 'Rain',
		runes: ['Ort', 'Mal', 'Ith'],
		sockets: 3,
		stats: {
			all: [
				'5% Chance To Cast Level 15 Cyclone Armor When Struck',
				'5% Chance To Cast Level 15 Twister On Striking',
				'+2 To Druid Skills',
				'+100-150 To Mana (varies)',
				'Lightning Resist +30%',
				'Magic Damage Reduced By 7',
				'15% Damage Taken Goes to Mana'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Body Armors'],
		bases_d2r: [],
		d2r_only: false,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 43,
		name: 'Treachery',
		runes: ['Shael', 'Thul', 'Lem'],
		sockets: 3,
		stats: {
			all: [
				'5% Chance To Cast Level 15 Fade When Struck',
				'25% Chance To Cast level 15 Venom On Striking',
				'+2 To Assassin Skills',
				'+45% Increased Attack Speed',
				'+20% Faster Hit Recovery',
				'Cold Resist +30%',
				'50% Extra Gold From Monsters'
			]
		},
		version: '1.11'
	},
	{
		bases: ['Swords', 'Assassin Katars', 'Daggers'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 67,
		name: 'Plague',
		runes: ['Cham', 'Shael', 'Um'],
		sockets: 3,
		stats: {
			all: [
				'20% Chance to cast level 12 Lower Resist when struck',
				'25% Chance to cast level 15 Poison Nova on striking',
				'Level 13-17 Cleansing Aura When Equipped (varies)',
				'+1-2 All Skills',
				'+20% Increased Attack Speed',
				'+220-320% Enhanced Damage (varies)',
				'-23% To Enemy Poison Resistance',
				'0.3% (0-29.7) Deadly Strike (Based on Character Level)',
				'+25% Chance of Open Wounds',
				'Freezes Target +3'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Assassin Katars'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 23,
		name: 'Pattern',
		runes: ['Tal', 'Ort', 'Thul'],
		sockets: 3,
		stats: {
			all: [
				'+30% Faster Block Rate',
				'+40-80% Enhanced Damage (varies)',
				'10% Bonus to Attack Rating',
				'Adds 17-62 Fire Damage',
				'Adds 1-50 Lightning Damage',
				'Adds 3-14 Cold Damage',
				'+75 Poison Damage Over 5 Seconds',
				'+6 to Strength',
				'+6 to Dexterity',
				'All Resistances +15'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Swords'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 41,
		name: 'Unbending Will',
		runes: ['Fal', 'Io', 'Ith', 'Eld', 'El', 'Hel'],
		sockets: 6,
		stats: {
			all: [
				'18% Chance to cast Level 18 Taunt on striking',
				'+3 To Combat Skills (Barbarian Only)',
				'+20-30% Increased Attack Speed (varies)',
				'+300-350% Enhanced Damage (varies)',
				'+9 To Maximum Damage',
				'+50 To Attack Rating',
				'+75% Damage to Undead',
				'+50 Attack Rating Against Undead',
				'8-10% Life Stolen Per Hit (varies)',
				'Prevent Monster Heal',
				'+10 To Strength',
				'+10 To Vitality',
				'Damage Reduced By 8',
				'+1 Light Radius',
				'Requirements -20%'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 45,
		name: 'Wisdom',
		runes: ['Pul', 'Ith', 'Eld'],
		sockets: 3,
		stats: {
			all: [
				'+33% Piercing Attack',
				'+15-25% Bonus to Attack Rating (varies)',
				'4-8% Mana Stolen Per Hit (varies)',
				'+30% Enhanced Defense',
				'+10 Energy',
				'15% Slower Stamina Drain',
				'Cannot Be Frozen',
				'+5 Mana After Each Kill',
				'15% Damage Taken Goes to Mana'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Staves'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 69,
		name: 'Obsession',
		runes: ['Zod', 'Ist', 'Lem', 'Lum', 'Io', 'Nef'],
		sockets: 6,
		stats: {
			all: [
				'Indestructible',
				'24% Chance to cast level 10 Weaken when struck',
				'+4 To All Skills',
				'+65% Faster Cast Rate',
				'+60% Faster Hit Recovery',
				'Knockback',
				'+10 To Vitality',
				'+10 To Energy',
				'Increase Maximum Life 15-25% (varies)',
				'Regenerate Mana 15-30% (varies)',
				'All Resistances +60-70 (varies)',
				'75% Extra Gold from Monsters',
				'30% Better Chance of Getting Magic Items'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 55,
		name: 'Flickering Flame',
		runes: ['Nef', 'Pul', 'Vex'],
		sockets: 3,
		stats: {
			all: [
				'Level 4-8 Resist Fire Aura When Equipped (varies)',
				'+3 To Fire Skills',
				'-10-15% to Enemy Fire Resistance (varies)',
				'+30% Enhanced Defense',
				'+30 Defense Vs. Missile',
				'+50-75 To Mana (varies)',
				'Half Freeze Duration',
				'+5% To Maximum Fire Resist',
				'Poison Length Reduced by 50%'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Missile Weapons'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: false
		},
		levelreq: 67,
		name: 'Mist',
		runes: ['Cham', 'Shael', 'Gul', 'Thul', 'Ith'],
		sockets: 5,
		stats: {
			all: [
				'Level 8-12 Concentration Aura When Equipped (varies)',
				'+3 To All Skills',
				'20% Increased Attack Speed',
				'+100% Piercing Attack',
				'+325-375% Enhanced Damage (varies)',
				'+9 To Maximum Damage',
				'20% Bonus to Attack Rating',
				'Adds 3-14 Cold Damage',
				'Freeze Target +3',
				'+24 Vitality',
				'All Resistances +40'
			]
		},
		version: '2.4'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 35,
		name: 'Bulwark',
		runes: ['Shael', 'Io', 'Sol'],
		sockets: 3,
		stats: {
			all: [
				'+20% Faster Hit Recovery',
				'+4-6% Life stolen per hit (varies)',
				'+75-100% Enhanced Defense (varies)',
				'+10 to Vitality',
				'Increase Maximum Life 5%',
				'Replenish Life +30',
				'Damage Reduced by 7',
				'Physical Damage Received Reduced by 10-15% (varies)'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 35,
		name: 'Cure',
		runes: ['Shael', 'Io', 'Tal'],
		sockets: 3,
		stats: {
			all: [
				'+20% Faster Hit Recovery',
				'+75-100% Enhanced Defense (varies)',
				'+10 to Vitality',
				'Increase Maximum Life 5%',
				'Poison Resist +40-60% (varies)',
				'Poison Length Reduced by 75%'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 35,
		name: 'Ground',
		runes: ['Shael', 'Io', 'Ort'],
		sockets: 3,
		stats: {
			all: [
				'+20% Faster Hit Recovery',
				'+75-100% Enhanced Defense (varies)',
				'+10 to Vitality',
				'Increase Maximum Life 5%',
				'Lightning Resist +40-60% (varies)',
				'Lightning Absorb +10-15% (varies)'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 35,
		name: 'Hearth',
		runes: ['Shael', 'Io', 'Thul'],
		sockets: 3,
		stats: {
			all: [
				'+20% Faster Hit Recovery',
				'+75-100% Enhanced Defense (varies)',
				'+10 to Vitality',
				'Increase Maximum Life 5%',
				'Cold Resist +40-60% (varies)',
				'Cold Absorb +10-15% (varies)'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 35,
		name: 'Temper',
		runes: ['Shael', 'Io', 'Ral'],
		sockets: 3,
		stats: {
			all: [
				'+20% Faster Hit Recovery',
				'+75-100% Enhanced Defense (varies)',
				'+10 to Vitality',
				'Increase Maximum Life 5%',
				'Fire Resist +40-60% (varies)',
				'Fire Absorb +10-15% (varies)'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Body Armors', 'Weapons'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 39,
		name: 'Hustle',
		runes: ['Shael', 'Ko', 'Eld'],
		sockets: 3,
		stats: {
			'Body Armors': [
				'+65% Faster Run/Walk',
				'+40% Increased Attack Speed',
				'+20% Faster Hit Recovery',
				'+6 to Evade',
				'+10 to Dexterity',
				'50% Slower Stamina Drain',
				'+All Resistances +10'
			],
			Weapons: [
				'5% Chance to cast level 1 Burst of Speed on striking',
				'Level 1 Fanaticism Aura When Equipped',
				'+30% Increased Attack Speed',
				'+180-200% Enhanced Damage (varies)',
				'+75% Damage to Undead',
				'+50 to Attack Rating against Undead',
				'+10 to Dexterity'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Assassin Katars'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 53,
		name: 'Mosaic',
		runes: ['Mal', 'Gul', 'Thul'],
		sockets: 3,
		stats: {
			all: [
				'+50% chance for finishing moves to not consume charges',
				'When a finisher is executed this way, it now refreshes the expiration timer of the stack',
				'+2 to Martial Arts (Assassin only)',
				'+20% Increased Attack Speed',
				'+200-250% Enhanced Damage (varies)',
				'+20% Bonus to Attack Rating',
				'7% Life Steal',
				'+8-15% to Cold Skill Damage (varies)',
				'+8-15% to Lightning Skill Damage (varies)',
				'+8-15% to Fire Skill Damage (varies)',
				'Prevent Monster Heal'
			]
		},
		version: '2.6'
	},
	{
		bases: ['Helms'],
		bases_d2r: [],
		d2r_only: true,
		ladder: {
			d2lod: false,
			d2r: true
		},
		levelreq: 67,
		name: 'Metamorphosis',
		runes: ['Io', 'Cham', 'Fal'],
		sockets: 3,
		stats: {
			all: [
				'Werewolf strikes grant Mark for 180 seconds',
				'Mark of the Wolf:',
				'+20% Bonus to Attack Rating',
				'Increase Maximum Life 40%',
				'',
				'Werebear strikes grant Mark for 180 seconds',
				'Mark of the Bear:',
				'+25% Attack Speed',
				'Physical Damage Received Reduced by 20%',
				'',
				'+5 to Shape Shifting Skills (Druid only)',
				'+25% chance of Crushing Blow',
				'+50-80% Enhanced Defense (varies)',
				'+10 to Strength',
				'+10 to Vitality',
				'All Resistances +10',
				'Cannot be Frozen'
			]
		},
		version: '2.6'
	}
];
