import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { api } from './api';
const authSecret = env.VITE_TRELLO_KEY;
const secretListId = env.VITE_TRELLO_LIST_ID;

export const load = async ({ }) => {
  const items = await fetch('https://api.trello.com/1/lists/'+secretListId+'/cards'+ '?key=' + authSecret)
  if (items) {
    return {
      items: items.json()
    }
  }
}

export const actions = {
  delete: async ({ request, locals }) => {
    const form = await request.formData();
    await api('DELETE', 'cards/'+form.get('id'));
  }
}
