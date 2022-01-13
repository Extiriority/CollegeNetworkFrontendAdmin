<script>
	import '../app.css';
    import Header from "../components/Nav.svelte";
</script>

<div class='flex flex-col h-screen'>
    <Header/>
    <main class="overflow-hidden flex flex-col h-full">
        <slot/>
    </main>
</div>
