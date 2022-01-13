<script>
		import store from '../helpers/shared/stores.ts'
		import { onMount } from 'svelte';

		let message
		export let sender
		let messages = []

		onMount(() => {
			store.subscribe(currentMessage => {
				messages = [...messages, currentMessage];
			})
		})

		function onSendMessage() {
			if (messages.length > 0) {
				store.sendMessage(sender +': '+ message);
				message = ''
			}
		}

		addEventListener("keyup", ({key}) => {
			if (key === "Enter") {
				onSendMessage();
			}
		})
</script>

<div class="flex flex-col max-w-md w-full">
	<div class='flex flex-col mb-4'>
			<div class=' rounded-lg shadow-2xl p-10 pl-20 pr-20 bg-white'>
				<h2 class="mt-2 pb-4 text-3xl font-extrabold text-gray-900">
					Open Chat
				</h2>
				<div class='flex flex-col overflow-y-auto'>
					{#each messages as message}
						<div class='border-b py-2'>
							{message}
						</div>
					{/each}
				</div>
				<div class='flex justify-between'>
					<input type='text' class='border border-gray-500 rounded-2xl mt-5 pl-4 mr-1' bind:value={message}>
					<button on:click={onSendMessage}
						class="mt-5 py-2 px-4 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
						type="submit"> >
					</button>
				</div>
			</div>
	</div>
</div>