import { env } from '$env/dynamic/private';
const secret = env.VITE_TRELLO_KEY;

import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const item = await fetch('https://api.trello.com/1/cards/'+params.id+'?key='+secret)
  if (item) {
    return {
      item: item.json()
    }
  }
}
