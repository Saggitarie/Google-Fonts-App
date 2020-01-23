import googleFonts from "./api/googleFonts";
import config from "./config";

export default class FontList {
  constructor() {}

  async getFontList() {
    const fontList = await googleFonts()
      .get(`webfonts?key=${config.apiKEY}&sort=popularity`)
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(`You've got an error with server response`);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          console.log("Other Error", error.response);
        }
      });

    console.log(fontList.data.items);
  }
}
