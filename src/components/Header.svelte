<script>
    import {authenticated} from "../stores/auth";
    import {goto} from "$app/navigation";
    import Fontys from "../resources/fontys.svg"

    let auth = false;
    authenticated.subscribe(a => auth = a);

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
        await goto('/login')
    }
</script>

<header class="sticky bg-white px-8 headerheight shadow-2xl">
    <div class="flex justify-between headerheight">
        <a href="/" class="flex items-center">
            <img src={Fontys} alt="Logo" width="40" height="40"/>
            <div class="font-medium text-xl text-black pl-3.5">Fontys Network</div>
        </a>
        <nav class="flex items-center">
            {#if auth}
                <ul class="flex font-medium text-xl text-black pl-3.5">
                    <li class="mx-2">
                      <a class="hover:text-purple-500" href="/" on:click={logout}>Logout</a>
                    </li>
                </ul>
            {:else }
                <ul class="flex font-medium text-xl text-black pl-3.5">
                    <li class="mx-2">
                        <a class="hover:text-purple-500" href="/login">Login</a>
                    </li>
                    <li class="mx-2">
                        <a class="hover:text-purple-500" href="/register">Register</a>
                    </li>
                </ul>
            {/if}
        </nav>
    </div>
</header>

<style>
  .headerheight {
    min-height: 5vh;
  }
</style>