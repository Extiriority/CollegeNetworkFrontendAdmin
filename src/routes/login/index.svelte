<script>
    import rest from "/src/helpers/rest/index.ts";
    import { authenticated } from "/src/helpers/shared/stores";
    import { authConfig } from '/src/helpers/shared/configs.ts';

    let email = null, password;
    let auth
    let validation

    authenticated.subscribe(a => auth = a);

    const login = async () => {
        const json = JSON.stringify({email, password})
        await rest.post('login',
            json,
            authConfig
        ).then(response => {
            if (response.status === 200)
                authenticated.set(true);
                window.location = '/'
        }).catch(err => {
            console.log(err)
            validation = true
        })
    }
</script>


<div class="h-full grid grid-cols-1 place-items-center bg-[url('src/resources/loginBackground.webp')]">
    <div class="max-w-md w-full space-y-8">
        <form on:submit|preventDefault={login} class="rounded-lg shadow-2xl p-10 pl-20 pr-20 bg-white">
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in
            </h2>
            <div class="relative mt-12">
                <input bind:value={email}
                       type="email"
                       class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
                       id="floatingInput" placeholder="Email address">
                <label for="floatingInput"
                       class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                       peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
            </div>
            <div class="relative mt-6">
                <input bind:value={password}
                       type="password"
                       class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
                       id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword"
                       class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                       peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div>
                {#if validation}
                    <span class='text-red-900'>
                        email or password is wrong
                    </span>
                {/if}
            </div>
            <div class="font-medium py-4 pr-40">
                <label>
                    <input type="checkbox"
                           data-cy='checkbox'
                           value="remember-me"> Remember me
                </label>
            </div>
            <button
                    class="w-full py-2 px-4 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                    data-cy='submit'
                    type="submit">Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2021 - {new Date().getFullYear()}</p>
        </form>
    </div>
</div>
