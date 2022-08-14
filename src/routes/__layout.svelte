<script>
    import {supabase} from "../supabase.js";
    import Nav from "../components/Nav.svelte";
    import Auth from "../components/Auth.svelte";
    import {user} from "../stores/authStore.js";
    import {loadJobs} from "../stores/store.js";
    import Form from "../components/Form.svelte";
    import "../app.css";
    // console.log(supabase);

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user)
        if (session?.user) {
            loadJobs();
        }
    })
</script>

<div>
    {#if $user}
        <Nav />
        <slot />
        <Form />
    {:else}
        <Auth />
    {/if}    
</div>
