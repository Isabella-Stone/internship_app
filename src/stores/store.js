import { writable } from 'svelte/store';

export const jobCompany = writable([]);

export const addCompany = async (text, text2) => {
    // const {data, error} = await supabase.from('todos').insert([{text, completed:false}]);
    // if(error) {
    //     return console.error(error);
    // }
    //jobs.update(cur => [...cur, data[0]]);

    jobCompany.update( (cur) => {
        const newCompany = [...cur, {text, text2}];
        return newCompany;
    })
    // jobCompany.update( (cur) => {
    //     const newCompany = [...cur, {company, title}];
    //     return newCompany;
    // })
};

export const addTitle = async (text) => {
    jobRow.update( (cur) => {
        const newRow = [...cur, {text}];
        return newRow;
    })
};