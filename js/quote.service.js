/**
 * Class to handle the Quote API operations requested by the app
 */

class QuoteService {
    constructor(url) {
      this.setUrl(url);
    }
  
    setUrl(url) {
      this.url = url;
    }
  
    async getQuote() {
      try {
        const quote_req = await fetch(this.url);
        const quote_res = quote_req.json();
        return quote_res;
      } catch (exception) {
        throw Error(`Oops! ${exception.message}`);
      }
    }
  }

  export default QuoteService;