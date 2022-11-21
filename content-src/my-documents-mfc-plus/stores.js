import { writable, derived } from 'svelte/store';

export const user = writable({});
export const authorized = writable(false);

export const mfcList = writable([]);
let $mfcList;
mfcList.subscribe(value => {
	$mfcList = value;
});
export const urmList = writable([]);
let $urmList;
urmList.subscribe(value => {
	$urmList = value;
});

export const offices = derived([mfcList, urmList], () => [...$mfcList, ...$urmList]);

const localOffices = JSON.parse(localStorage.getItem('my-offices') || '[]');
export const myOffices = writable(localOffices);
let $myOffices;
myOffices.subscribe(value => {
	localStorage.setItem('my-offices', JSON.stringify(value));
	$myOffices = value;
});
export const addOffice = (id) => {
	myOffices.set([...$myOffices, id])
}
export const removeOffice = (id) => {
	myOffices.set($myOffices.filter(office => office.id !== id))
}
