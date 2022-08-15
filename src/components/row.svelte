<script>
    import {deleteJob} from "../stores/store.js";
    import {editJob} from "../stores/store.js";
    import {user} from "../stores/authStore.js";
    export let job; //accept prop

    // document.getElementById('bio').addEventListener('input', function(){
    //     console.clear()
    //     console.log(this.innerHTML)
    // })

    let showSave = false;

    function editRow() {
        showSave=false;
        editJob(job.company, job.title, job.link, job.outcome, $user.id, job.id);
    }
</script>


<div class="flex flex-row justify-center my-8">

    <div class="w-[19px] h-[19px] opacity-60 hover:opacity-25 py-3 mr-5">
        {#if showSave} 
            <button on:click={editRow}>
                <img src="/save.png" name="submit" alt="save">
            </button>
        {/if}
    </div>

    <div class="w-[23px] h-[23px] opacity-60 hover:opacity-25 py-2">
        <button on:click={() => showSave=true}>
            <img src="/edit.png" name="submit" alt="edit">
        </button>
    </div>

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
    <div contentEditable="true" text-content.bind="outcome" class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
        <p>{job.outcome}</p>
    </div>

    <div class="w-[20px] h-[20px] opacity-60 hover:opacity-25 py-2">
        <button on:click={() => deleteJob(job.id)}>
            <img src="/trash.png" name="submit" alt="delete">
        </button>
    </div>

</div>


