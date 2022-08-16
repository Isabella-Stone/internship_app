import {writable} from 'svelte/store';
import {supabase} from "../supabase.js";

export const jobList = writable([]);

function isValidDate(dateString) {
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1];
};

//load specific users todos from db
export const loadJobs = async () => {
    const {data, error} = await supabase.from('jobs').select().order('date_created', { ascending: true });
    if (error) {
        return console.error(error);
    }
    jobList.set(data);
}

export const addJob = async (company, title, portal, due, outcome, user_id, date_created) => {
    const {data, error} = await supabase.from('jobs').insert([{company, title, portal, due, outcome, user_id, date_created}]);
    if (error) {
        return console.error(error);
    }
    jobList.update((cur) => [...cur, data[0]]);
};

export const editJob = async (newCompany, newTitle, newPortal, newDue, newOutcome, id) => {
    // deleteJob(id);
    // addJob(company, title, portal, outcome, user_id);

    // error checking
    // if (newDue!=="submitted" && !isValidDate(newDue)) {
    //     alert("Due Date/Submiited field must be entered as either a valid date in the form of 'mm/dd/yyy' or 'submitted' if you have already submitted in the application");
    //     return;
    // }
    // if (outcome!=="newOutcome" && outcome!=="newOutcome" && newOutcome!=="tbd") {
    //     alert("Outcome field must be entered as either 'accepted', 'denied', or 'tbd'.");
    //     return;
    // }

    //locate job based on it's id
    const {data, error} = await supabase.from('jobs').update({ company: newCompany }).eq('id', id);
    if (error) {
        return console.error(error);
    }

    const {data2, error2} = await supabase.from('jobs').update({ title: newTitle }).eq('id', id);
    if (error2) {
        return console.error(error);
    }

    const {data3, error3} = await supabase.from('jobs').update({ portal: newPortal }).eq('id', id);
    if (error3) {
        return console.error(error);
    }

    const {data4, error4} = await supabase.from('jobs').update({ due: newDue }).eq('id', id);
    if (error4) {
        return console.error(error);
    }

    const {data5, error5} = await supabase.from('jobs').update({ outcome: newOutcome }).eq('id', id);
    if (error5) {
        return console.error(error);
    }

    loadJobs(); //show changes 
};

export const editStatus = async (oldStatus, id) => {
    // const {data, error} = await supabase.from('jobs').update({ submitted: newStatus }).eq('id', id);
    // if (error) {
    //     return console.error(error);
    // }
    // //loadJobs(); //show changes 

    const {error} = await supabase.from('jobs').update({ submitted: !oldStatus }).match({id});
    if (error) {
        return console.error(error);
    }

    jobList.update((jobs) => {
        let index = -1;
        for (let i = 0; i < jobList.length; i++) {
            if (jobList[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            jobList[index].submitted = !jobList[index].completed;
        }
        return jobList;
    });
    
    loadJobs(); //show changes 
}

export const deleteJob = async (id) => {
    const {error} = await supabase.from('jobs').delete().match({id});
    if (error) {
        return console.error(error);
    }
    jobList.update(jobs => jobs.filter(job => job.id !== id));
};