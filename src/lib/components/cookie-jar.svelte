<script>
    import { onMount } from 'svelte';
  
    let cookiesEnabled = false;
  
    onMount(async () => {
      // Check if cookies are enabled
      if (typeof window !== 'undefined') {
        cookiesEnabled = navigator.cookieEnabled;
  
        if (cookiesEnabled) {
          const response = await fetch("/api/set-cookie", {
              method:"POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({cookiesEnabled})
            });
        }
      }
    });
  </script>
  
  <div>
    {#if cookiesEnabled}
      <p>Cookies are enabled.</p>
    {:else}
      <p> Cookies are not enabled </p>
    {/if}
  </div>