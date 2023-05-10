<script lang="ts">
	import HarDetails from '$lib/HarDetails.svelte';
	import Upload from '$lib/Upload.svelte';
	import type { HarEntry } from '$lib/interfaces';

	let uploadError: boolean;
	let entries: HarEntry[] | undefined;

	function onUpload(event: CustomEvent<{ error: boolean; entries?: HarEntry[] }>) {
		uploadError = event.detail.error;
		entries = event.detail.entries;
	}
</script>

{#if !entries}
	<Upload on:change={onUpload} />
{:else if uploadError}
	<p style="color:red;">Something went wrong. Please try again.</p>
{:else}
	<button on:click={() => (entries = undefined)}>Reset</button>
	<HarDetails {entries} />
{/if}
