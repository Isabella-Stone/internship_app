import {writable} from 'svelte/store';
import {supabase} from "../supabase.js";

//var to store our array of jobs
export const jobList = writable([]);

//load specific users todos from db, sorted by the date they were created
export const loadJobs = async () => {
    const {data, error} = await supabase.from('jobs').select().order('date_created', { ascending: true });
    if (error) {
        return console.error(error);
    }
    jobList.set(data);
}

//add a job to the db with fields: company, title, portal, due, outcome, user_id, date_created
export const addJob = async (company, title, portal, due, outcome, user_id, date_created) => {
    const {data, error} = await supabase.from('jobs').insert([{company, title, portal, due, outcome, user_id, date_created}]);
    if (error) {
        return console.error(error);
    }
    //append data[0] (the job we just created ^) to the end of our current (cur) data
    jobList.update((cur) => [...cur, data[0]]);
};

//edits each category of a job in the db
export const editJob = async (newCompany, newTitle, newPortal, newDue, newOutcome, id) => {
    //locate job based on it's id and update company field
    const {data, error} = await supabase.from('jobs').update({ company: newCompany }).eq('id', id);
    if (error) {
        return console.error(error);
    }

    //locate job based on it's id and update title field
    const {data2, error2} = await supabase.from('jobs').update({ title: newTitle }).eq('id', id);
    if (error2) {
        return console.error(error);
    }

    //locate job based on it's id and update portal field
    const {data3, error3} = await supabase.from('jobs').update({ portal: newPortal }).eq('id', id);
    if (error3) {
        return console.error(error);
    }

    //locate job based on it's id and update due field
    const {data4, error4} = await supabase.from('jobs').update({ due: newDue }).eq('id', id);
    if (error4) {
        return console.error(error);
    }

    //locate job based on it's id and update outcome field
    const {data5, error5} = await supabase.from('jobs').update({ outcome: newOutcome }).eq('id', id);
    if (error5) {
        return console.error(error);
    }

    loadJobs(); //show changes 
};

//deletes job from db by matching on id
export const deleteJob = async (id) => {
    const {error} = await supabase.from('jobs').delete().match({id});
    if (error) {
        return console.error(error);
    }
    //filters out jobs whose id does not match id
    jobList.update(jobs => jobs.filter(job => job.id !== id));
};