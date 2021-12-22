<script>
		import { authenticated } from '/src/helpers/shared/stores';
		import { onMount } from 'svelte';
		import rest from '/src/helpers/rest/index.ts';
		import { authConfig, baseConfig } from '/src/helpers/shared/configs.ts';

		let auth = false;
    let message
    let error
    let id, firstName, lastName, email, phoneNumber, gender, dateOfBirth, password


		authenticated.subscribe(a => auth = a);

		onMount(async () => {
				rest.get('user',
						baseConfig
				).then(response => {
						if (response.status === 200) {
								const user = response.data;
								console.log(user);
								id = user.id;
								firstName = user.firstName;
								lastName = user.lastName;
								email = user.email;
								phoneNumber = user.phoneNumber;
								gender = user.gender;
								dateOfBirth = new Date(user.dateOfBirth).toISOString().substring(0, 10);

								authenticated.set(true);
						}
				}).catch(err => {
						if (err.response) {
								console.log(err.response.status);
								alert('Error');
						}
				});
		});

		const edit = async () => {
				const json = JSON.stringify({ id, firstName, lastName, email, phoneNumber, gender, dateOfBirth, password });
				await rest.put('update_user',
						json,
						authConfig
				).catch(err => {
						if (err.response) {
								console.log(err.response.status);
								console.log(json)
						}
				});
		};
</script>

<div class="center">
		<div class='flex rounded-lg shadow-2xl shadow-indigo-500/50 p-10 pl-20 pr-20 bg-white'>
				<form on:submit|preventDefault={edit}>
						<h2 class='text-3xl font-extrabold text-gray-900 pb-4'>
								Edit profile
						</h2>
						<div>
								<input bind:value={id} type='hidden'>
						</div>
						<div class='flex py-6'>
								<div class='pr-3 relative'>
										<input bind:value={firstName}
													 type='text'
													 class='border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 pt-3 pb-1 peer placeholder-transparent'
													 id="floatingFirstName" placeholder="Edit firstname">
									  <label for="floatingFirstName"
													 class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
													 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
													 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">First name</label>
								</div>
								<div class='relative'>
										<input bind:value={lastName}
													 type='text'
													 class='border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 pt-3 pb-1 peer placeholder-transparent'
									         id="floatingLastName" placeholder="Last name">
										<label for="floatingLastName"
													 class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
													 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
												   peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Last name</label>
								</div>
						</div>
						<div class='relative pb-6'>
								<input bind:value={email}
											 type='email'
											 class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 pt-3 pb-1 peer placeholder-transparent"
							         id="floatingEmail"
							         placeholder="Email address">
								<label for="floatingEmail"
											 class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
											 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
											 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
						</div>
						<div class='relative pb-4'>
								<input bind:value={phoneNumber}
											 type='tel'
											 class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 pt-3 pb-1 peer placeholder-transparent"
											 id="floatingPhone"
											 placeholder="Mobile phone number">
								<label for="floatingPhone"
											 class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
												 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
												 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Mobile number</label>
						</div>
								<div class='relative py-6'>
										<h1 class='absolute inline-block mb-4 text-gray-700 -top-1 left-0'
										>Gender</h1>
										<div class='flex justify-between'>
												<div class='flex items-center'>
														<input
																	name='gender'
																	type='radio'
																	class='w-4 h-4 accent-blue-500 border border-gray-300 rounded-full outline-none cursor-pointer'
																	id='male'
																	value='Male'
														/><label class='ml-2 text-sm' for='male'>Male</label>
												</div>
												<div class='flex items-center'>
														<input
																	name='gender'
																	type='radio'
																	class='w-4 h-4 accent-pink-500 border border-gray-300 rounded-full outline-none cursor-pointer'
																	id='female'
																	value='Female'
														/><label class='ml-2 text-sm' for='female'>Female</label>
												</div>
												<div class='flex items-center'>
														<input
																	name='gender'
																	type='radio'
																	class='w-4 h-4 accent-gray-500 border border-gray-300 rounded-full outline-none cursor-pointer'
																	id='other'
																	value='Other'
														/><label class='ml-2 text-sm' for='other'>Other</label>
												</div>
												<div class='flex items-center'>
														<input
																	name='gender'
																	type='radio'
																	class='w-4 h-4 accent-red-500 border border-gray-300 rounded-full outline-none cursor-pointer'
																	checked='checked'
																	id='private'
																	value='Private'
														/><label class='ml-2 text-sm' for='private'>Prefer not to say</label>
												</div>
										</div>
								</div>
								<div class='relative'>
										<input value={dateOfBirth}
													 type='date'
													 class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 pt-3 pb-1 peer placeholder-transparent"
											     id="floatingDate"
											     placeholder="Mobile phone number">
										<label for="floatingDate"
													 class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
													 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
													 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Birthday</label>
									</div>
								<div class="relative mt-6">
										<input bind:value={password}
													 type="password"
													 class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
													 id="floatingPassword"
													 placeholder="Password">
										<label for="floatingPassword"
													 class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
													 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
													 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
								</div>
								<button
									class='w-full mt-5 py-2 px-4 bg-purple-800 shadow-violet-400 text-white font-semibold rounded-full shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75'
									type='submit'>Change info
								</button>
				</form>
		</div>
</div>

<style>
    .center {
        height: 95vh;
        display: grid;
        place-items: center;
        background-image: url("/src/resources/loginBackground.webp");
    }
</style>