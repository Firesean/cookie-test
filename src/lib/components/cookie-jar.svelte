<script>
    import { onMount } from 'svelte';
  
    let cookiesEnabled = false;
  
    onMount(async () => {
      // Check if cookies are enabled
      if (typeof window !== 'undefined') {
        cookiesEnabled = navigator.cookieEnabled;
  
        if (cookiesEnabled) {
          const response = await fetch("../api/set-cookie", {
              method:"POST",
              headers: {
                // "Content-Type": "application/json",
              },
              body: "test"
            });

          console.log(response);
          document.cookie = "testCookie=Hello; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
      }
    });
  </script>
  
  <div>
    {#if cookiesEnabled}
      <p>Cookies are enabled.</p>
    {/if}
  </div>