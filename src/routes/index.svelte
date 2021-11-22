<script>
    import {onMount} from 'svelte';
    import {authenticated} from '$lib/shared/stores';

    let message
    let error

    onMount( async () => {
        error = undefined
        try {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            if (response.ok) {
                const content = await response.json();
                message = `Hi ${content.firstName}`;
                authenticated.set(true);
            } else {
                message = 'You are not logged in';
                authenticated.set(false);
            }
        } catch (err) {
            console.log(err)
            error = 'An error occurred'
        }
    });
</script>

{message}
{#if error}<p>{error}</p>{/if}