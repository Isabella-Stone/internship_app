<script>
    import {jobList} from "../stores/store.js";
    import Row from "../components/Row.svelte";
</script>

<h1 class="text-center font-semibold mt-5 text-3xl">My Jobs:</h1>
<div class="flex flex-row justify-center my-8">
    
    <div class="w-[22px] h-[22px] opacity-0 py-2">
        <img src="/edit.png" name="submit" alt="edit">
    </div>

    <div class="flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40">
        <p>Company</p>
    </div>
    <div class="flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40">
        <p>Title</p>
    </div>
    <div class="flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40">
        <p>Portal</p>
    </div>
    <!-- <div class="flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-blue-400 px-4 py-2 rounded-lg w-40">
        <p>Submitted</p>
    </div> -->
    <div class="flex flex-col font-bold text-center text-3xl mb-2 mx-3 text-cyan-500 px-4 py-2 rounded-lg w-40">
        <p>Outcome</p>
    </div>
    <!-- implement to delete a job -->
    <div class="w-[20px] h-[20px] opacity-[0%] py-2">
        <img src="/trash.png" alt="delete">
    </div>

</div>
<main>
    {#each $jobList as job}
        <Row job={job}/>
    {/each}
</main>