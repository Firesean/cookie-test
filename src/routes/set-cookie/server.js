import cookie from 'cookie';

export async function get({ headers }) {
  const cookies = cookie.parse(headers.cookie || '');
  let thirdPartyCookiesEnabled = false;
  
  // Here you should really be doing a more complete check,
  // but for simplification, I'm just checking whether a cookie was set
  if ('thirdPartyTest' in cookies) {
    thirdPartyCookiesEnabled = true;
  }
  
  return {
    status: 200,
    headers: {
      'Set-Cookie': `thirdPartyTest=enabled; Path=/; HttpOnly`,
    },
    body: {
      thirdPartyCookiesEnabled,
    },
  };
}
