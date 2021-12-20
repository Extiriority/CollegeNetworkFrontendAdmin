<script>
    import { authenticated } from '/src/helpers/shared/stores';
    import { onMount } from "svelte";
    import rest from '/src/helpers/rest/index.ts';
		import { baseConfig } from '/src/helpers/shared/configs.ts';

    let auth = false;
    let message
    let error
    let id, name, email, phoneNumber, gender, dateOfBirth

    authenticated.subscribe(a => auth = a);

    onMount( async () => {
        rest.get('user',
        baseConfig
        ).then(response => {
            if (response.status === 200) {
                const user = response.data
								console.log(user)
                id = user.id
                name = user.firstName +' '+ user.lastName
                email = user.email
                phoneNumber = user.phoneNumber
                gender = user.gender
                dateOfBirth = user.dateOfBirth

                authenticated.set(true);
            }
        }).catch(err => {
            if (err.response) {
                console.log(err.response.status)
                alert('Error')
            }
        })
    });

</script>
<div class='center'>
	<div class="max-w-md w-full space-y-8 rounded-lg shadow-2xl shadow-indigo-500/50 p-10 pl-20 pr-20 bg-white">
		<div>
			<h2 class="mt-6 text-3xl font-extrabold text-gray-900">
				Info
			</h2>
			<p>User ID: {id}</p>
			<p>Name: {name}</p>
			<p>Contact: {email}</p>
			<p>Mobile phone: {phoneNumber}</p>
			<p>Gender: {gender}</p>
			<p>Birth date: {dateOfBirth}</p>
		</div>
	</div>
</div>

<style>
    .center {
        height: 95vh;
        display: grid;
        place-items: center;
    }
</style>