<script>
    import rest from '/src/helpers/rest/index.ts';
    import { authConfig } from '/src/helpers/shared/configs.ts';

    let firstName, lastName, email, password;

    const register = async () => {
        const json = JSON.stringify({firstName, lastName, email, password})
        await rest.post('register',
            json,
            authConfig
        )
        window.location = '/login';
    };
</script>

<div class="h-full grid grid-cols-1 place-items-center bg-[url('src/resources/loginBackground.webp')]">
    <div class="max-w-md w-full space-y-8">
        <form on:submit|preventDefault={register} class="rounded-lg shadow-2xl p-10 pl-20 pr-20 bg-white">
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
              Register
            </h2>
            <div class='flex relative mt-12'>
                <div class="pr-3">
                    <input bind:value={firstName}
                           type="text"
                           class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
                           id="floatingFirstName" placeholder="First name">
                    <label for="floatingFirstName"
                           class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                           peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">First name</label>
                </div>
                <div class="relative">
                    <input bind:value={lastName}
                           type="text"
                           class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
                           id="floatingLastName" placeholder="Last name">
                    <label for="floatingLastName"
                           class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
                           peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                           peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Last name</label>
                </div>
            </div>
            <div class="relative mt-6">
                <input bind:value={email}
                       type="email"
                       class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
                       id="floatingInput"
                       placeholder="Email address">
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
            <button
                    class="w-full mt-5 py-2 px-4 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                    type="submit">Register
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2021 - {new Date().getFullYear()}</p>
        </form>
    </div>
</div>
