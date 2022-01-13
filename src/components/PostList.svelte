<script>
	import { onMount } from 'svelte';
	import rest from '../helpers/rest/index.ts';
	import { authConfig, baseConfig } from '../helpers/shared/configs.ts';

	let content
	let posts = []
	export let userId


	const postMessage = async () => {
		const json = JSON.stringify({userId, content})
		await rest.post('postMsg',
			json,
			authConfig
		).catch(err => {
			if (err.response) {
				console.log(err.response.status);
				alert('Error');
			}
		});
	};

	onMount(async () => {
		rest.get('get_all_posts',
			baseConfig
		).then(response => {
			if (response.status === 200) {
				posts = response.data;
			}
		}).catch(err => {
			if (err.response) {
				console.log(err.response.status);
				alert('Error');
			}
		});
	});

</script>


<div class="flex flex-col pl-10 w-full">
	<div class='rounded-lg shadow-2xl p-10 pl-20 pr-20 bg-white '>
		<h2 class="mt-2 text-3xl font-extrabold text-gray-900">
			Feed
		</h2>

		{#each posts as post}
			<div class='border rounded-xl pb-1 mt-1 px-3'>
				{post.content}
				<div class='flex justify-between'>
					<div></div>
					<div>
						~ {post.user_id}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>



