<script lang="ts">
	import { RUNES } from '$lib/data/runes';
	import { rune_inventory } from '$lib/options.svelte';
	import { d2s_reader } from '$lib/d2s_utils';
	import type { ParsedItems } from '$lib/d2s_utils';
	import { CircleAlert } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	let d2s = new d2s_reader();

	let files: FileList | null = $state(null);

	$effect(() => {
		if (!mounted) {
			return;
		}
		localStorage.setItem('runes', JSON.stringify(rune_inventory));
	});

	onMount(() => {
		let local_settings = localStorage.getItem('runes');
		if (local_settings != null) {
			let parsed_settings: number[] = JSON.parse(local_settings);
			for (let i = 0; i < parsed_settings.length; i++) {
				rune_inventory[i] = parsed_settings[i];
			}
		}
		mounted = true;
	});

	$effect(() => {
		if (files && files.length > 0) {
			const file = files[0];
			const reader = new FileReader();
			reader.onload = async (e) => {
				if (file.name.endsWith('.d2s')) {
					d2s.read_character_items(e.target.result).then(function (response) {
						if (response.error) {
							alert('Error: ' + response.error_message);
						} else {
							fill_runes(response.items);
						}
					});
				} else if (file.name.endsWith('.d2i')) {
					d2s.read_shared_stash_items(e.target.result).then(function (response) {
						if (response.error) {
							alert('Error: ' + response.error_message);
						} else {
							fill_runes(response.items);
						}
					});
				}
			};
			reader.readAsArrayBuffer(file);
		}
	});

	function fill_runes(items, clear = false): void {
		if (clear) {
			rune_inventory.fill(0);
		}
		items.forEach((item) => {
			if (item.categories.includes('Rune')) {
				let rune_index = parseInt(item.type.substring(1)) - 1;
				rune_inventory[rune_index]++;
			}
		});
	}

	let all_set_nb = $state(1);
	let ranges = [
		{ start: 0, end: 33, display: 'All' },
		{ start: 0, end: 11, display: 'El to Amn' },
		{ start: 11, end: 22, display: 'Sol to Um' },
		{ start: 22, end: 33, display: 'Mal to Zod' }
	];
	let selected_range = $state(0);

	function setRunes(value: number): void {
		let rune_range = ranges[selected_range];
		for (let i = rune_range.start; i < rune_range.end; i++) {
			rune_inventory[i] = value;
		}
	}
</script>

<article>
	{#each [0, 1, 2] as row}
		<div class="rune-grid" style="align-items:center; margin:auto;">
			{#each RUNES.slice(row * 11, (row + 1) * 11) as rune, index}
				<div>
					<input
						type="number"
						name={rune}
						min="0"
						step="1"
						class:active_rune={rune_inventory[row * 11 + index] > 0}
						bind:value={rune_inventory[row * 11 + index]}
					/>
					<small>{rune}</small>
				</div>
			{/each}
		</div>
	{/each}
	<hr />

	<div class="flex" style="justify-content: space-between;">
		<div class="flex" style="gap:var(--pico-spacing)">
			<input
				style="width:auto;"
				type="button"
				onclick={() => {
					setRunes(0);
				}}
				value="Reset Runes"
			/>
			<div>
				<input bind:files type="file" accept=".d2s, .d2i" />
				<small>
					Load runes from a save file or shared stash file. <span
						data-tooltip="Reset your runes if you don't want them to be added to the total."
						><CircleAlert size="1rem" /></span
					></small
				>
			</div>
		</div>
		<div aria-labelledby="all_runes" class="set-runes">
			<div>
				<input
					type="number"
					aria-describedby="all_runes"
					id="all_runes"
					name="all_runes"
					bind:value={all_set_nb}
					style="min-width: 6rem;"
					min="0"
					step="1"
				/>
				<small>Number to set</small>
			</div>
			<div>
				<select
					class="auto-width"
					name="rune-range"
					aria-label="Range of runes to set"
					bind:value={selected_range}
				>
					{#each ranges as range, index}
						<option value={index}>{range.display}</option>
					{/each}
				</select>
				<small>Range of runes</small>
			</div>

			<input
				type="button"
				value="Set"
				onclick={() => {
					setRunes(all_set_nb);
				}}
			/>
		</div>
	</div>
</article>

<style>
	.set-runes {
		display: flex;
		gap: var(--pico-form-element-spacing-horizontal);
	}

	.rune-grid {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: repeat(11, 1fr);
		justify-items: center;
		column-gap: var(--pico-grid-column-gap);
		row-gap: var(--pico-grid-row-gap);
	}

	.rune-grid small {
		font-size: medium;
		color: var(--pico-secondary);
	}

	.rune-grid input[type='number'] {
		min-width: 3rem;
		max-width: 5rem;
		font-size: 1.25rem;
		font-family: var(--pico-font-family-monospace);
	}

	.rune-grid input.active_rune {
		color: var(--pico-primary);
	}

	.rune-grid input:not(.active_rune) {
		color: var(--pico-secondary);
	}
</style>
