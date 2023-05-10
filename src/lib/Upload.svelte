<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function readFile(event: Event) {
		let file = (event.target as HTMLInputElement).files![0];

		if (file instanceof File) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const contents = e.target?.result as string;

				const harData = JSON.parse(contents);
				dispatch('change', { err: false, entries: harData.log.entries });
			};
			reader.readAsText(file);
		} else {
			dispatch('change', { err: true, message: 'Something went wrong. Please try again.' });
		}
	}
</script>

<div class="container flex mx-auto justify-center items-center flex-col h-screen">
	<input type="file" name="file" on:change={readFile} />
</div>
