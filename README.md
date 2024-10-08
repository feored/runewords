## Runeword Explorer

https://feored.github.io/runeword-explorer

This is a runeword calculator for those of us who play single-player D2, where you can't just trade for runes, and sometimes it's worth cubing up a bunch of runes if it lets you get an Enigma.

It shows you the gems and exact cubing requirements, and if you can't get there, the lowest number of runes you're still missing.

### Features

- Instantly fill in the runes of your character/shared stash by uploading the relevant .d2s/.d2i file<sup>1</sup>

- An exact description of the steps required to cube up to a certain runeword.

- The smallest<sup>2</sup> list of runes still missing to cube to a certain runeword.

- All the filters I could think of and a search bar.

- Search using synonyms<sup>3</sup> (e.g searching 'mf' will also look for "Magic Items", 'ias' for "Increased Attack Speed".

### Changelog

**0.4.0**

- Use localstorage to save rune grid between sessions
- Setting to blacklist runeowrd
- Setting to expand category bases into their full contents
- Setting to calibrate # of cubing steps to show before collapsing
- Separate settings page
- Fixed favicons

### Notes

<sup>1</sup> Using [d2s](https://github.com/dschu012/d2s/) by [dschu012](https://github.com/dschu012/) to parse .d2s files, with shared stash support based on [myocytebd's](https://github.com/myocytebd/d2s.d2r) fork. Thanks to them.

<sup>2</sup> Smallest in terms of cubing value. Consider the following example: You are looking to make the runeword "Nef Tir", and you have 5 Els, 1 Eld and 1 Tir. The value in Els of "Nef Tir" is 27 + 9 = 36, and you currently own 5 + 3 + 9 = 17 "El value". The calculator will give you the smallest decomposition of runes that equal (36 - 17 = 19) Els and let you cube up to Nef Tir, which in this case is 1 El and 2 Tir (1 + 18).

<sup>3</sup> Full list of synonyms [here](https://github.com/feored/runeword-explorer/blob/main/src/lib/data/synonyms.ts)
