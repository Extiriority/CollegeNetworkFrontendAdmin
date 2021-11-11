<script>
  import { goto } from "$app/navigation";

  let email, password;

  const submit = async () => {
    await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });

    await goto('/');
  }
</script>

<div class="center">
    <div class="max-w-md w-full space-y-8">
        <form on:submit|preventDefault={submit} class="rounded-lg shadow-2xl p-10 pl-20 pr-20 bg-white">
            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in
            </h2>
            <div class="relative mt-12">
                <input bind:value={email}
                  type="email" class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent"
                       id="floatingInput" placeholder="Email address">
                <label for="floatingInput"
                       class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                       peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
            </div>
            <div class="relative mt-6">
                <input bind:value={password}
                  type="password" class="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-900 py-2 peer placeholder-transparent" id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword"
                       class="absolute left-0 top-0 -top-3.5 text-gray-600 text-base transition-all
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                       peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>

            <div class="font-medium py-4">
                <label>
                    <input type="checkbox"
                           value="remember-me"> Remember me
                </label>
            </div>
            <button
              class="w-full py-2 px-4 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
              type="submit">Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    </div>
</div>

<style>
    .center{
        height: 95vh;
        display: grid;
        place-items: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../resources/loginBackground.png");
    }
</style>
