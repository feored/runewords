export interface RuneData {
	name: string;
	levelreq: number;
	mods: {
		weapon: string[];
		armor: string[];
		shield: string[];
	};
}

export const RUNES: string[] = [
	'El',
	'Eld',
	'Tir',
	'Nef',
	'Eth',
	'Ith',
	'Tal',
	'Ral',
	'Ort',
	'Thul',
	'Amn',
	'Sol',
	'Shael',
	'Dol',
	'Hel',
	'Io',
	'Lum',
	'Ko',
	'Fal',
	'Lem',
	'Pul',
	'Um',
	'Mal',
	'Ist',
	'Gul',
	'Vex',
	'Ohm',
	'Lo',
	'Sur',
	'Ber',
	'Jah',
	'Cham',
	'Zod'
];

export const RUNE_DATA: RuneData[] = [
	{
		name: 'El',
		levelreq: 11,
		mods: {
			weapon: ['+1 To Light Radius', '+50 Attack Rating'],
			armor: ['+15 Defense', '+1 To Light Radius'],
			shield: ['+15 Defense', '+1 To Light Radius']
		}
	},
	{
		name: 'Eld',
		levelreq: 11,
		mods: {
			weapon: ['+50 Attack Rating Against Undead', '+75% Damage To Undead'],
			armor: ['15% Slower Stamina Drain'],
			shield: ['7% Increased Chance of Blocking']
		}
	},
	{
		name: 'Tir',
		levelreq: 13,
		mods: {
			weapon: ['+2 To Mana After Each Kill'],
			armor: ['+2 To Mana After Each Kill'],
			shield: ['+2 To Mana After Each Kill']
		}
	},
	{
		name: 'Nef',
		levelreq: 13,
		mods: {
			weapon: ['Knockback'],
			armor: ['+30 Defense Vs. Missile'],
			shield: ['+30 Defense Vs. Missile']
		}
	},
	{
		name: 'Eth',
		levelreq: 15,
		mods: {
			weapon: ['-25% To Target Defense'],
			armor: ['Regenerate Mana 15%'],
			shield: ['Regenerate Mana 15%']
		}
	},
	{
		name: 'Ith',
		levelreq: 15,
		mods: {
			weapon: ['+9 To Maximum Damage'],
			armor: ['15% Damage Taken Goes to Mana'],
			shield: ['15% Damage Taken Goes to Mana']
		}
	},
	{
		name: 'Tal',
		levelreq: 17,
		mods: {
			weapon: ['+75 Poison Damage Over 5 Seconds'],
			armor: ['+30% Poison Resistance'],
			shield: ['+35% Poison Resistance']
		}
	},
	{
		name: 'Ral',
		levelreq: 19,
		mods: {
			weapon: ['+5-30 Fire Damage'],
			armor: ['+30% Fire Resistance'],
			shield: ['+35% Fire Resistance']
		}
	},
	{
		name: 'Ort',
		levelreq: 21,
		mods: {
			weapon: ['+1-50 Lightning Damage'],
			armor: ['+30% Lightning Resistance'],
			shield: ['+35% Lightning Resistance']
		}
	},
	{
		name: 'Thul',
		levelreq: 23,
		mods: {
			weapon: ['+3-14 Cold Damage (Cold Length 3 seconds)'],
			armor: ['+30% Cold Resistance'],
			shield: ['+35% Cold Resistance']
		}
	},
	{
		name: 'Amn',
		levelreq: 25,
		mods: {
			weapon: ['7% Life Stolen Per Hit'],
			armor: ['Attacker takes 14 damage'],
			shield: ['Attacker takes 14 damage']
		}
	},
	{
		name: 'Sol',
		levelreq: 27,
		mods: {
			weapon: ['+9 to Minimum Damage'],
			armor: ['Damage Reduced By 7'],
			shield: ['Damage Reduced By 7']
		}
	},
	{
		name: 'Shael',
		levelreq: 29,
		mods: {
			weapon: ['20% Increased Attack Speed'],
			armor: ['20% Faster Hit Recovery'],
			shield: ['20% Faster Block Rate']
		}
	},
	{
		name: 'Dol',
		levelreq: 31,
		mods: {
			weapon: ['25% Chance that Hit Causes Monster to Flee'],
			armor: ['+7 Replenish Life'],
			shield: ['+7 Replenish Life']
		}
	},
	{
		name: 'Hel',
		levelreq: 1,
		mods: {
			weapon: ['-20% Requirements'],
			armor: ['-15% Requirements'],
			shield: ['-15% Requirements']
		}
	},
	{
		name: 'Io',
		levelreq: 35,
		mods: {
			weapon: ['+10 To Vitality'],
			armor: ['+10 To Vitality'],
			shield: ['+10 To Vitality']
		}
	},
	{
		name: 'Lum',
		levelreq: 37,
		mods: {
			weapon: ['+10 To Energy'],
			armor: ['+10 To Energy'],
			shield: ['+10 To Energy']
		}
	},
	{
		name: 'Ko',
		levelreq: 39,
		mods: {
			weapon: ['+10 To Dexterity'],
			armor: ['+10 To Dexterity'],
			shield: ['+10 To Dexterity']
		}
	},
	{
		name: 'Fal',
		levelreq: 41,
		mods: {
			weapon: ['+10 To Strength'],
			armor: ['+10 To Strength'],
			shield: ['+10 To Strength']
		}
	},
	{
		name: 'Lem',
		levelreq: 43,
		mods: {
			weapon: ['+75% Extra Gold from Monsters'],
			armor: ['+50% Extra Gold from Monsters'],
			shield: ['+50% Extra Gold from Monsters']
		}
	},
	{
		name: 'Pul',
		levelreq: 45,
		mods: {
			weapon: ['+75% Damage To Demons', '+100 Attack Rating Against Demons'],
			armor: ['+30% Enhanced Defense'],
			shield: ['+30% Enhanced Defense']
		}
	},
	{
		name: 'Um',
		levelreq: 47,
		mods: {
			weapon: ['25% Chance of Open Wounds'],
			armor: ['+15% All Resistances'],
			shield: ['+22% All Resistances']
		}
	},
	{
		name: 'Mal',
		levelreq: 49,
		mods: {
			weapon: ['Prevent Monster Heal'],
			armor: ['Magic Damage Reduced By 7'],
			shield: ['Magic Damage Reduced By 7']
		}
	},
	{
		name: 'Ist',
		levelreq: 51,
		mods: {
			weapon: ['+30% Better Chance of Getting Magic Items'],
			armor: ['+25% Better Chance of Getting Magic Items'],
			shield: ['+25% Better Chance of Getting Magic Items']
		}
	},
	{
		name: 'Gul',
		levelreq: 53,
		mods: {
			weapon: ['+20% Attack Rating'],
			armor: ['+5% To Maximum Poison Resist'],
			shield: ['+5% To Maximum Poison Resist']
		}
	},
	{
		name: 'Vex',
		levelreq: 55,
		mods: {
			weapon: ['+7% Mana Stolen Per Hit'],
			armor: ['+5% To Maximum Fire Resist'],
			shield: ['+5% To Maximum Fire Resist']
		}
	},
	{
		name: 'Ohm',
		levelreq: 57,
		mods: {
			weapon: ['+50% Enhanced Damage'],
			armor: ['+5% To Maximum Cold Resist'],
			shield: ['+5% To Maximum Cold Resist']
		}
	},
	{
		name: 'Lo',
		levelreq: 59,
		mods: {
			weapon: ['+20% Chance of Deadly Strike'],
			armor: ['+5% To Maximum Lightning Resist'],
			shield: ['+5% To Maximum Lightning Resist']
		}
	},
	{
		name: 'Sur',
		levelreq: 61,
		mods: {
			weapon: ['+ 20% Chance of Hit Blinds Target'],
			armor: ['+5% to Maximum Mana'],
			shield: ['+50 To Mana']
		}
	},
	{
		name: 'Ber',
		levelreq: 63,
		mods: {
			weapon: ['+20% Chance of Crushing Blow'],
			armor: ['Damage Reduced by 8%'],
			shield: ['Damage Reduced by 8%']
		}
	},
	{
		name: 'Jah',
		levelreq: 65,
		mods: {
			weapon: ["Ignore Target's Defense"],
			armor: ['+5% to Maximum Life'],
			shield: ['+50 to Life']
		}
	},
	{
		name: 'Cham',
		levelreq: 67,
		mods: {
			weapon: ['32% Chance of Hit Freezing Target for 3 seconds'],
			armor: ['Cannot Be Frozen'],
			shield: ['Cannot Be Frozen']
		}
	},
	{
		name: 'Zod',
		levelreq: 69,
		mods: {
			weapon: ['Indestructible'],
			armor: ['Indestructible'],
			shield: ['Indestructible']
		}
	}
];
