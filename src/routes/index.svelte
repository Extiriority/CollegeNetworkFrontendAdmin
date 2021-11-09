<script>
    import {onMount} from "svelte";
    import {authenticated} from "../stores/auth";

    let message = ''

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            const content = await response.json();
            console.log(content);


            message = `Hi ${content.firstName}`;
            authenticated.set(true);
        } catch (e) {
            message = 'You are not logged in';
            authenticated.set(false);
        }
    });

</script>

{message}
