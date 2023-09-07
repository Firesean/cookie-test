import { json } from '@sveltejs/kit';

export async function POST({ request, cookies, url }) {
  const { cookiesEnabled } = await request.json();
  console.log(cookies);

  if (cookiesEnabled){
    let date = new Date();
    date.setDate(date.getDate() + 7);
    cookies.set('Cookie Monster', "Cookie Monster's Revenge", {expires: date, path:"/", sameSite:"none", "Access-Control-Allow-Origin": "https://preflect-ads-contact-us.vercel.app/", "Access-Control-ALlow-Credentials":true});
  }

  return json({ cookiesEnabled });
}