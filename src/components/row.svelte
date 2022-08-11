<script>
    export let job; //accept prop
</script>


<div class="flex flex-row justify-center my-8">

    <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>{job.company}</p>
    </div>
    <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>{job.title}</p>
    </div>
    <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>{job.link}</p>
    </div>
    <!-- <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>Submitted</p>
    </div> -->
    <div class="flex flex-col text-sm mb-2 mx-3 bg-gray-300 px-4 py-2 rounded-lg w-40">
        <p>{job.outcome}</p>
    </div>
    <!-- implement to delete a job -->
    <div class="w-[20px] h-[20px] opacity-[60%] py-2">
        <img src="/trash.png" alt="delete">
    </div>

</div>


