<script>
    // import {user} from "../stores/authStore.js";
    import {addCompany} from '../stores/store.js';
    let company = '';
    let title = '';
    let link = '';
    // let due = '';
    let outcome = '';

    //just to save the internship to the list, each row will be a list
    const handleSubmit = () => {
        addCompany(company) //defined in store
        company = '';
        // addTitle(title)
        // let title = '';
        // addLink(link)
        // let link = '';
        // addDue(due)
        // //let due = '';
        // //addOutcome(outcome)
        // let outcome = '';
    } 


    //max-w-lg
</script>

<form on:submit|preventDefault={handleSubmit}>

    <div class="flex flex-row justify-center">
    <!-- <div class="flex flex-row justify-center h-screen"> -->
        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="todo" class="font-bold mb-2 text-gray-800 float-left">
                Company
            </label>
    
            <!--everytime we change 'company' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="todo"
                bind:value={company} 
                placeholder="ex. Google"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg" 
            />
        </div>

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="todo" class="font-bold mb-2 text-gray-800 float-left">
                Job Title
            </label>
    
            <!--everytime we change 'title' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="todo"
                bind:value={title} 
                placeholder="ex. frontend intern"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="todo" class="font-bold mb-2 text-gray-800 float-left">
                Link to Portal
            </label>
    
            <!--everytime we change 'link' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="todo"
                bind:value={link} 
                placeholder="..."
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <!-- <div class="flex flex-col text-sm mb-2 px-3">
            <label for="todo" class="font-bold mb-2 text-gray-800 float-left">
                Submitted/duedate
            </label>
    
            <input
                type="text"
                name="todo"
                bind:value={due} 
                placeholder="done/todo"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div> -->

        <div class="flex flex-col text-sm mb-2 px-3">
            <label for="todo" class="font-bold mb-2 text-gray-800 float-left">
                Outcome
            </label>
    
            <!--everytime we change 'due' it will update the var bc of the 'bind'-->
            <input
                type="text"
                name="todo"
                bind:value={outcome} 
                placeholder="accepted/denied"
                class="appearance-none shadow-sm border border-gray-300 p-2 focus:outline-none focus:border-gray-500 rounded-lg " 
            />
        </div>

        <div class="py-7 px-3">
            <button type="submit" class="shadow-sm rounded bg-blue-400 hover:bg-blue-500 text-white py-2 px-4">
                Add Job
            </button>
        </div>
    </div>
    
    
</form>