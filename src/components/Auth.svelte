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

<form on:submit|preventDefault={handleLogin}>
    <div style="background-image: url(/bg.jpg)"
        class="flex h-screen justify-center pt-20">
        <div class="flex flex-col text-sm mb-2 container mx-auto my-6 max-w-sm">
            <h1 class="text-2xl font-bold text-center text-zinc-600 md:text-3xl">Login</h1>
            <p class="text-center mt-2 text-zinc-600">Enter your email below to sign in via a magic link</p>
            
            <label class="font-bold mb-2 text-gray-800" for="email"></label>
            <input class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg mt-2" 
            name="email" type="email" placeholder="email address" bind:value={email}>
    
            <button class="shadow-sm rounded bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-4 mt-2" type="submit">
                Log In
            </button>
        </div>
    </div>
</form>
