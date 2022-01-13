<script>
    import {onMount} from 'svelte';
    import rest from '../helpers/rest/index.ts';
		import { baseConfig } from '../helpers/shared/configs.ts';
		import Chat from "../components/Chat.svelte";
		import Search from "../components/Search.svelte";
		import Blog from "../components/Blog.svelte";

		let firstName
		let id
    let errorMsg

    onMount(async () => {
        rest.get('user',
            baseConfig
        ).then(response => {
            if (response.status === 200) {
                const content = response.data;
								console.log(content)
								firstName = content.firstName
								id = content.id
            }
        }).catch(() => {
            console.log('You are not logged in');
            window.location = '/login'
        })
    });
</script>


<div class="flex h-full place-content-center bg-[url('src/resources/loginBackground.webp')]">
			<div class='flex pt-20 fixed'>
					<Chat sender={firstName}/>
					<Blog userId={id}/>
					<Search/>
			</div>
</div>
