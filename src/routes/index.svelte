<script>
    import {onMount} from 'svelte';
    import rest from "$lib/rest/index.ts";
    import {goto} from "$app/navigation";

    export let email

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    }
    let message
    let errorMsg

    onMount(async () => {
        rest.get('user',
            config
        ).then(response => {
            if (response.status === 200) {
                const content = response.data;
                message = `Hi ${content.firstName}`;
                email = content.email
            }
        }).catch(() => {
            alert('You are not logged in');
            goto('login')
        })
    });
</script>

<h1 class="text-center">{message} you are logged in with email {email}</h1>
{#if errorMsg}<p>{errorMsg}</p>{/if}