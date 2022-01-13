<script>
    import {onMount} from 'svelte';
    import rest from '../helpers/rest/index.ts';
		import { baseConfig } from '../helpers/shared/configs.ts';
		import UserList from "../components/UserList.svelte";
		import PostList from "../components/PostList.svelte";

		let firstName
		let id

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
				<PostList/>
				<UserList/>
			</div>
</div>
