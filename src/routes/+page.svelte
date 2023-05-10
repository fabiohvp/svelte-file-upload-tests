<script lang="ts">
	import { goto } from '$app/navigation';
	import { harStore } from '$lib/harStore';
	import { fail } from '@sveltejs/kit';

	// Function that reads the file from the file input and returns the contents
	function readFile(event: Event) {
		let file = (event.target as HTMLInputElement).files![0];

		if (file instanceof File) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const contents = e.target?.result as string;

				const harData = JSON.parse(contents);
				$harStore = harData.log.entries;
				goto('/test');
			};
			reader.readAsText(file);
		} else {
			return fail(500, { err: true, msg: 'Something went wrong. Please try again.' });
		}
	}
</script>

<div class="container flex mx-auto justify-center items-center flex-col h-screen">
	<input type="file" name="file" on:change={readFile} />
</div>
