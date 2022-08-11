<script>
    import {deleteJob} from "../stores/store.js";
    export let job; //accept prop
</script>


<div class="flex flex-row justify-center my-8">

    <div class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
        <p>{job.company}</p>
    </div>
    <div class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
        <p>{job.title}</p>
    </div>
    <div class="overflow-hidden overflow-y-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        {#if job.link !== ""} 
            <p> <a href="{job.link}">{job.company} Portal</a> </p>
        {/if}
    </div>
    <!-- <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>Submitted</p>
    </div> -->
    <div class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
        <p>{job.outcome}</p>
    </div>

    <!-- implement to delete a job -->
    <div class="w-[20px] h-[20px] opacity-60 hover:opacity-25 py-2">
        <button on:click={() => deleteJob(job.id)}>
            <img src="/trash.png" name="submit" alt="delete">
        </button>
    </div>

</div>


