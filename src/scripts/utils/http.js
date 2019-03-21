import { setSpinner } from './generic.js';

export default async function get(url) {
  setSpinner(true);
  let response = await fetch(url);
  return response;
}
