<script>
    import {onMount} from 'svelte';
    import {authenticated} from '$lib/shared/stores';
    import rest from "$lib/rest/index.ts";

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
                authenticated.set(true);
            }
        }).catch(() => {
            message = 'You are not logged in';
            authenticated.set(false);
        })
    });
</script>

{message}
{#if errorMsg}<p>{errorMsg}</p>{/if}