/*
	This module is used by the /add endpoint to
	make calls to api.trello.com, which stores todos

*/

import { env } from '$env/dynamic/private';
const secret = env.VITE_TRELLO_KEY;
const base = 'https://api.trello.com/1';

export function api(method, resource, data) {
	return fetch(`${base}/${resource}`+`?key=${secret}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}

