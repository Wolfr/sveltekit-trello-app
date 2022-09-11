import { error } from '@sveltejs/kit';
import { api } from '../api';

import { env } from '$env/dynamic/private';
const secretListId = env.VITE_TRELLO_LIST_ID;

export const actions = {
  add: async ({ request, locals }) => {
    
    const form = await request.formData();
    // console.log(form.get('name'))
    // console.log(form.get('desc'))
    await api('POST', 'cards', {
      idList: secretListId,
      name: form.get('name'),
      desc: form.get('desc')
    });
  }
}
