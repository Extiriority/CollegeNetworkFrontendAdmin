<script>
    import {authenticated} from "$lib/sessions/auth";
    import {onMount} from "svelte";

    let auth = false;
    let message
    let error
    let id
    let name
    let email
    let phoneNumber
    let gender
    let dateOfBirth
    authenticated.subscribe(a => auth = a);

    onMount( async () => {
        error = undefined
        try {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            if (response.ok) {
                const user = await response.json();

                id = user.id
                name = user.firstName +' '+ user.lastName
                email = user.email
                phoneNumber = user.phoneNumber
                gender = user.gender
                dateOfBirth = user.dateOfBirth

                authenticated.set(true);
            } else {
                message = 'You are not logged in';
                authenticated.set(false);
            }
        } catch (err) {
            console.log(err)
            message = '';
            error = 'An error occurred'
        }
    });

</script>

<h3>{id}</h3>
<h3>{name}</h3>
<h3>{email}</h3>
<h3>{phoneNumber}</h3>
<h3>{gender}</h3>
<h3>{dateOfBirth}</h3>