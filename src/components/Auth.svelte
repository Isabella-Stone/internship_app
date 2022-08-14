<script>
    import {supabase} from "../supabase.js";

    let loading = false;
    let email;

    const handleLogin = async () => {
        try {
            loading = true;
            const {error} = await supabase.auth.signIn({email});
            if (error) {
                throw error;
            }
            alert('You have been emailed a login link.')
        }
        catch (err) {
            console.error(err);
            alert(error.error_description || error.message);
        }
        finally {
            loading = false;
        }
    }
</script>

<h1 class="text-2xl font-bold text-center text-black-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign in via magic link with your email below</p>

<form on:submit|preventDefault={handleLogin}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-gray-800" for="email"></label>
        <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" 
        name="email" type="email" placeholder="enter email" bind:value={email}>
    </div>

    <button class="shadow-sm rounded bg-blue-400 hover:bg-blue-500 text-white py-2 px-4" type="submit">
        Log In
    </button>
</form>