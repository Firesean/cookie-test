<!-- <script>
    import { onMount } from 'svelte';
  
    let cookiesEnabled = false;
  
    onMount(() => {
      // Check if cookies are enabled
      if (typeof window !== 'undefined') {
        cookiesEnabled = navigator.cookieEnabled;
  
        if (cookiesEnabled) {
          // Create a cookie
          document.cookie = "testCookie=Hello; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
      }
    });
  </script>
  
  <div>
    {#if cookiesEnabled}
      <p>Cookies are enabled.</p>
    {/if}
  </div> -->

  <script>
    import { onMount } from 'svelte';
    
    let result = 'Testing...';
    
    async function testThirdPartyCookies() {
      try {
        const response = await fetch('http://localhost:4000/set-cookie', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          result = data.thirdPartyCookiesEnabled ? 'Third-party cookies are enabled!' : 'Third-party cookies are disabled!';
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
  
    onMount(() => {
      testThirdPartyCookies();
    });
  </script>
  
  <h1>{result}</h1>
  