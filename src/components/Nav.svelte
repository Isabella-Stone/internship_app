<script>
    import {supabase} from "../supabase.js";

    const logout = () => {
        supabase.auth.signOut();
    }
</script>

<div class="my-4 flex justify-end px-5">
    <button on:click={logout} class="shadow-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4">
        Log Out
    </button>
</div>