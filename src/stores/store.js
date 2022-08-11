import { writable } from 'svelte/store';

export const jobList = writable([]);

export const addJob = (company, title, link, outcome) => {
    // const {data, error} = await supabase.from('todos').insert([{text, completed:false}]);
    // if(error) {
    //     return console.error(error);
    // }
    //jobs.update(cur => [...cur, data[0]]);

    jobList.update( (cur) => {
        const newCompany = [...cur, {company, title, link, outcome, id: Date.now()}];
        return newCompany;
    })
};

export const deleteJob = (id) => {
    jobList.update(jobs => jobs.filter(job => job.id !== id));
};

