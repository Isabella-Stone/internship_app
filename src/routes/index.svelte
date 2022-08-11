<script>
    import {jobCompany} from "../stores/store.js";
    import Row from "../components/row.svelte";
</script>

<h1>Table of all here</h1>
<main>
    {#each $jobCompany as company}
        <Row job={company}/>
    {/each}
</main>