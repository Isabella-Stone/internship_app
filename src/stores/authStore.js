import {writable} from "svelte/store";

//variable to keep track of whether or not user is logged in
export const user = writable(false);