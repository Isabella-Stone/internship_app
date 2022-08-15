<script>
    import {deleteJob} from "../stores/store.js";
    import {editJob} from "../stores/store.js";
    export let job; //accept prop

    let showSave = false;
    let showEdit = true;

    function editMode() {
        showSave = true;
        showEdit = false;
    }

    function saveRow() {
        showSave = false;

        job.outcome = 
        editJob(document.getElementById("companyId").innerHTML, //newCompany
                document.getElementById("titleId").innerHTML,   //newTitle 
                document.getElementById("portalId").innerHTML,  //newPortal
                document.getElementById("outcomeId").innerHTML, //newOutcome
                job.id);
        
        showEdit = true;
    }
</script>

<div class="flex flex-row justify-center my-8">

    {#if showEdit}
        <div class="w-[23px] h-[23px] opacity-60 hover:opacity-25 py-2">
            <button on:click={editMode}>
                <img src="/edit.png" name="submit" alt="edit">
            </button>
        </div>
    {:else}
        <div class="w-[19px] h-[19px] opacity-60 hover:opacity-25 py-3">
            {#if showSave} 
                <button on:click={saveRow}>
                    <img src="/save.png" name="submit" alt="save">
                </button>
            {/if}
        </div>
    {/if}

    {#if showSave}
        <div contenteditable="true" id="companyId" class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 hover:bg-gray-400 px-2 py-2 rounded-lg w-40">
            {job.company}
        </div>
    {:else}
        <div class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
            {job.company}
        </div>
    {/if}

    {#if showSave}
        <div contenteditable="true" id="titleId" class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 hover:bg-gray-400 px-2 py-2 rounded-lg w-40">
            {job.title}
        </div>
    {:else}
        <div class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
            {job.title}
        </div>
    {/if}

    {#if showSave}
        <div contenteditable="true" id="portalId" class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 hover:bg-gray-400 px-2 py-2 rounded-lg w-40">
            {#if job.link !== ""} 
                <a href="{job.portal}">{job.company} Portal</a>
            {/if}
            <!-- {job.portal} -->
        </div>
    {:else}
        <div class="overflow-hidden overflow-y-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            {#if job.portal !== ""} 
                <a href="{job.portal}">{job.company} Portal</a>
            {/if}
        </div>
    {/if}

    <!-- <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>Submitted</p>
    </div> -->

    {#if showSave}
        <div contenteditable="true" id="outcomeId" class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 hover:bg-gray-400 px-2 py-2 rounded-lg w-40">
            {job.outcome}
        </div>
    {:else}
        <div class="overflow-hidden flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-2 py-2 rounded-lg w-40">
            {job.outcome}
        </div>
    {/if}
    
    
    <div class="w-[20px] h-[20px] opacity-60 hover:opacity-25 py-2">
        <button on:click={() => deleteJob(job.id)}>
            <img src="/trash.png" name="submit" alt="delete">
        </button>
    </div>

</div>


