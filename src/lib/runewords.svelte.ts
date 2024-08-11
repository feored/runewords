import { RUNES, VERSIONS } from "$lib/rw";
import type { Bases } from "$lib/rw";
import BASES from "$lib/data/itemtypes.json";

const BASES_DATA = BASES as Bases;

interface FilterOptions {
	search: string;
	can_make: boolean;
	ladder_d2r: boolean;
	ladder_d2lod: boolean;
	versions: { [key: string]: boolean };
	sockets: { min: number, max: number };
	levelreq: { min: number, max: number };
	bases: { [key: string]: boolean };
	required_runes: boolean[];
}

export let rune_inventory: number[] = $state(new Array(RUNES.length).fill(0));

export let all_bases: string[] = [];
for (let key in BASES_DATA) {
	for (let i = 0; i < BASES_DATA[key].length; i++) {
		if (!all_bases.includes(BASES_DATA[key][i])) {
			all_bases.push(BASES_DATA[key][i]);
		}
	}
}

export const default_filter_options: FilterOptions = {
	search: "",
	can_make: true,
	ladder_d2r: true,
	ladder_d2lod: true,
	versions: Object.fromEntries(VERSIONS.map(v => [v, true])),
	sockets: { min: 2, max: 6 },
	levelreq: { min: 1, max: 99 },
	bases: Object.fromEntries(all_bases.map((base_name) => [base_name, true])),
	required_runes: new Array(RUNES.length).fill(false)
};


export let filter_options: FilterOptions = $state({ ...default_filter_options });