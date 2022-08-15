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

export const deleteJob = async (id) => {
    const {error} = await supabase.from('jobs').delete().match({id});
    if (error) {
        return console.error(error);
    }
    jobList.update(jobs => jobs.filter(job => job.id !== id));
};

