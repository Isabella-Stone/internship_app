import {writable} from 'svelte/store';
import {supabase} from "../supabase.js";

export const jobList = writable([]);

//load specific users todos from db
export const loadJobs = async () => {
    const {data, error} = await supabase.from('jobs').select();
    if (error) {
        return console.error(error);
    }
    jobList.set(data);
}

export const addJob = async (company, title, portal, outcome, user_id) => {
    const {data, error} = await supabase.from('jobs').insert([{company, title, portal, outcome, user_id}]);
    if (error) {
        return console.error(error);
    }
    jobList.update((cur) => [...cur, data[0]]);
};

export const editJob = async (newCompany, newTitle, newPortal, newOutcome, id) => {
    // deleteJob(id);
    // addJob(company, title, portal, outcome, user_id);

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

    const {data4, error4} = await supabase.from('jobs').update({ outcome: newOutcome }).eq('id', id);
    if (error4) {
        return console.error(error);
    }

    loadJobs(); //show changes 
};

export const deleteJob = async (id) => {
    const {error} = await supabase.from('jobs').delete().match({id});
    if (error) {
        return console.error(error);
    }
    jobList.update(jobs => jobs.filter(job => job.id !== id));
};

