<script>
    import {onMount} from 'svelte';
    import rest from '../helpers/rest/index.ts';
		import { baseConfig } from '../helpers/shared/configs.ts';

    let message
    let errorMsg

    onMount(async () => {
        rest.get('user',
            baseConfig
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