<script lang="ts">
	import { harStore } from '$lib/harStore';
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		$harStore = []; //cleanup memory
	});
</script>

{JSON.stringify($harStore)}
