<script>
	import '../app.css';
    import Header from "../components/Nav.svelte";
</script>

<div class='flex flex-col h-screen'>
    <Header/>
    <main class="h-full text-center">
        <slot/>
    </main>
</div>
