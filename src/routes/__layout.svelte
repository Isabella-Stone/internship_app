<script context="module">
    import {supabase} from "../supabase.js";
    import Nav from "../components/Nav.svelte";
    import Auth from "../components/Auth.svelte";
    import {user} from "../stores/authStore.js";
    import {loadJobs} from "../stores/store.js";
    import Form from "../components/Form.svelte";
    import "../app.css";

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user)
        if (session?.user) {
            loadJobs();
        }
    })
</script>

<!-- title displayed on tab -->
<svelte:head>
    <title>Job Tracker</title>
</svelte:head>

<div>
    <!-- if user is logged in, show jobs -->
    {#if $user}
        <Nav />
        <slot />
        <Form />
    <!-- else, prompt them to login -->
    {:else}
        <Auth />
    {/if}    
</div>
