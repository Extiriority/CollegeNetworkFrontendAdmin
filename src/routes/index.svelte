<script>
    import {onMount} from 'svelte';
    import rest from "../helpers/rest/index.ts";

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
                message = `Hi ${content.firstName} you are logged in with email: ${content.email}`;
            }
        }).catch(() => {
            message = 'You are not logged in';
            window.location = '/login'
        })
    });
</script>

<h1 class="text-center">{message}</h1>
{#if errorMsg}<p>{errorMsg}</p>{/if}