<script context="module">
	export async function load({page}) {
		return {
			props: {
				...page.params,
				user: page.params.user
			}
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import rest from '/src/helpers/rest/index.ts';
	import { baseConfig } from '/src/helpers/shared/configs.ts';

	export let user
	let id, firstName, lastName, email, phoneNumber, gender, dateOfBirth

	onMount(async () => {
		rest.get(`user/${user}`,
			baseConfig
		).then(response => {
			if (response.status === 200) {
				const person = response.data;
				id = person.id;
				firstName = person.firstName;
				lastName = person.lastName;
				email = person.email;
				phoneNumber = person.phoneNumber;
				gender = person.gender;
				dateOfBirth = new Date(person.dateOfBirth).toISOString().substring(0, 10);
				getAge(dateOfBirth)
			}
		}).catch(err => {
			if (err.response) {
				console.log(err.response.status);
				alert('Error');
			}
		});
	});

	const deleteUser = async () => {
		await rest.delete(`delete_user/${user}`,
			baseConfig
		).then(() => {
			window.location = '/';
		}).catch(err => {
			if (err.response) {
				console.log(err.response.status);
			}
		});
	};


	function getAge(dateString) {
		let today = new Date();
		let birthDate = new Date(dateString);
		age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	let age;
</script>

<div class="h-full grid grid-cols-1 place-items-center bg-[url('src/resources/loginBackground.webp')]">
	<div class="max-w-3xl w-full space-y-8">
		<div class="rounded-lg shadow-2xl p-10 pl-20 pr-20 bg-white">
			<h2 class="mt-6 text-3xl font-extrabold text-gray-900">
				User Profile
			</h2>
			<div class='mt-12'>
				<div class="flex justify-between">
					<div class='text-xl'>Name:</div>
					<div class='text-xl'>{firstName} {lastName}</div>
				</div>
			</div>
			<div class="relative mt-6">
				<div class="flex justify-between">
					<label class='text-xl'>Contact:</label>
					<label class='text-xl'>{email} / {phoneNumber}</label>
				</div>
			</div>
			<div class="relative mt-6">
				<div class="flex justify-between">
					<label class='text-xl'>Gender:</label>
					<label class='text-xl'>{gender}</label>
				</div>
			</div>
			<div class="relative mt-6">
				<div class="flex justify-between">
					<label class='text-xl'>Age:</label>
					<label class='text-xl'>{age}</label>
				</div>
			</div>
		<button
			class='w-full mt-10 py-2 px-4 bg-red-600 shadow-red-400 text-white font-semibold rounded-full shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75'
			on:click={deleteUser}>Delete user
		</button>
		</div>
	</div>
</div>
