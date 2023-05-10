<script lang="ts">
	import HarDetails from '$lib/HarDetails.svelte';
	import Upload from '$lib/Upload.svelte';
	import type { HarEntry } from '$lib/interfaces';

	let errorMessage: string;
	let entries: HarEntry[] | null;

	function onUpload(event: CustomEvent<{ err: boolean; message?: string; entries?: HarEntry[] }>) {
		if (event.detail.err) {
			errorMessage = event.detail.message!;
			return;
		}
		entries = event.detail.entries!;
	}
</script>

{#if !entries}
	<Upload on:change={onUpload} />
{:else if errorMessage}
	<p style="color:red;">{errorMessage}</p>
{:else}
	<button on:click={() => (entries = null)}>Reset</button>
	<HarDetails {entries} />
{/if}
