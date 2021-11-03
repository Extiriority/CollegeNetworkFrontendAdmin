<script>
  import Fontys from "../resources/fontys.svg"
</script>

<header class="sticky bg-white px-8 headerheight shadow-2xl">
    <div class="flex justify-between headerheight">
        <a href="/" class="flex items-center">
            <img src={Fontys} alt="Logo" width="40" height="40"/>
            <div class="font-medium text-xl text-black pl-3.5">Fontys Network</div>
        </a>
        <nav class="flex items-center">
            <ul class="flex font-medium text-xl text-black pl-3.5">
                <li class="mx-2">
                  <a class="hover:text-purple-500" href="/login">Login</a>
                </li>
                <li class="mx-2">
                  <a class="hover:text-purple-500" href="/register">Register</a>
                </li>
        <!--<a href=""></a>
        <a href=""></a>
        <a href=""></a>-->
            </ul>
        </nav>
    </div>
</header>

<style>
  .headerheight {
    min-height: 5vh;
  }
</style>