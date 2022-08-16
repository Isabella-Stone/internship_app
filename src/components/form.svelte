<script>
    import {addJob} from '../stores/store.js';
    import {user} from "../stores/authStore.js";
    
    let company = '';
    let title = '';
    let link = '';
    // let due = '';
    let outcome = '';
    let submitted = null;

    //just to save the internship to the list, each row will be a list
    const handleSubmit = () => {
        console.log(company);
        console.log(title);
        console.log(link);
        console.log(outcome);
        console.log(submitted);
        addJob(company, title, link, outcome, submitted, $user.id, Date.now()) //defined in store
        company = '';
        title = '';
        link = '';
        // //let due = '';
        outcome = '';
        submitted = null;
    } 


    //max-w-lg
</script>

<form on:submit|preventDefault={handleSubmit}>

<div class="flex flex-row justify-center pb-10">
    <!-- <div class="flex flex-row justify-center h-screen"> -->
        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="company" class="font-bold mb-2 text-gray-800 float-left">
                Company
            </label>
    
            <!--everytime we change 'company' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="company"
                bind:value={company} 
                placeholder="ex. Google"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg" 
            />
        </div>

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="title" class="font-bold mb-2 text-gray-800 float-left">
                Job Title
            </label>
    
            <!--everytime we change 'title' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="title"
                bind:value={title} 
                placeholder="ex. frontend intern"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="link" class="font-bold mb-2 text-gray-800 float-left">
                Link to Portal
            </label>
    
            <!--everytime we change 'link' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="link"
                bind:value={link} 
                placeholder="..."
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <!-- <div class="flex flex-col text-sm mb-2 px-3">
            <label for="due" class="font-bold mb-2 text-gray-800 float-left">
                Submitted/duedate
            </label>
    
            <input
                type="text"
                name="due"
                bind:value={due} 
                placeholder="done/todo"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div> -->

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="outcome" class="font-bold mb-2 text-gray-800 float-left">
                Outcome
            </label>
    
            <!--everytime we change 'due' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="outcome"
                bind:value={outcome} 
                placeholder="accepted/denied/tbd"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="flag" class="font-bold mb-2 text-gray-800 float-left">
                Application Submitted
            </label>
    
            <!--everytime we change 'submitted' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="flag"
                bind:value={submitted} 
                placeholder="true/false"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <div class="py-7 px-3">
            <button type="submit" class="shadow-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4">
                Add Job
            </button>
        </div>

    </div>
    
</form>