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

<h3>{id}</h3>
<h3>{name}</h3>
<h3>{email}</h3>
<h3>{phoneNumber}</h3>
<h3>{gender}</h3>
<h3>{dateOfBirth}</h3>