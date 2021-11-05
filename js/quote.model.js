/**
 * Model class of the Quote
 */

class QuoteModel {
    constructor() {
      this.quote = null;
    }
  
    setQuote(quote) {
      this.quote = quote;
    }
  
    getQuote() {
      return this.quote;
    }
  }

  export default QuoteModel;