import {writable} from "svelte/store";
// @ts-ignore
import {browser} from '$app/env';

export const authenticated = writable(browser && (localStorage.getItem("authenticated") || false));
authenticated.subscribe((val) => browser && (localStorage.setItem("authenticated", val.toString())));