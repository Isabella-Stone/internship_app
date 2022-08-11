import { writable } from 'svelte/store';

export const newJob = writable([]);

export const addCompany = async (company, title, link, outcome) => {
    // const {data, error} = await supabase.from('todos').insert([{text, completed:false}]);
    // if(error) {
    //     return console.error(error);
    // }
    //jobs.update(cur => [...cur, data[0]]);

    newJob.update( (cur) => {
        const newCompany = [...cur, {company, title, link, outcome}];
        return newCompany;
    })
    // jobCompany.update( (cur) => {
    //     const newCompany = [...cur, {company, title}];
    //     return newCompany;
    // })
};