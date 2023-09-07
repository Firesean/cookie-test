export const actions = {
  default: async ({ request }) => {
    try{
      console.log("Request received");
      let value = await request;
      console.log(value);
      return "Test-Cookie";
    }
    catch(error){
      console.log("Error has Occurred");
    }
  }
}