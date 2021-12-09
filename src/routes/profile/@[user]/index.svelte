<script>
    import {authenticated} from "../../../helpers/shared/stores";
    import {onMount} from "svelte";
    import rest from "../../../helpers/rest/index.ts";

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    }
    let auth = false;
    let message
    let error
    let id, name, email, phoneNumber, gender, dateOfBirth

    authenticated.subscribe(a => auth = a);

    onMount( async () => {
        rest.get('user',
        config
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


        /*error = undefined
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
        }*/
    });

</script>

<h3>{id}</h3>
<h3>{name}</h3>
<h3>{email}</h3>
<h3>{phoneNumber}</h3>
<h3>{gender}</h3>
<h3>{dateOfBirth}</h3>