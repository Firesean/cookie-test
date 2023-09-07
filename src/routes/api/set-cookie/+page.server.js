export const actions = {
  default: async ({ request }) => {
    try{
      console.log("Request received");
      let value = await request.json();
      console.log(value);
      if (value){return JSON.stringify({success: true, body:"Test-Cookie"});};
      return new Response("Enable Cookies");
      
    }
    catch(error){
      console.log("Error has Occurred : " + error);
      return JSON.stringify({success: false});
    }
  }
}