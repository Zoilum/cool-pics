import get from './http.js';

export async function getRandomImage() {
  const response = await get('https://source.unsplash.com/random');
  console.log(response);
  const url = await response.url;
  return url;
}
