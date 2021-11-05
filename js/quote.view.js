/**
 * Class to chandles the view
 * Registers DOM elems
 * Renders the quote from the quote model
 */

class QuoteView {
    constructor() {
      this.quoteMessageElem = this.getElem("quote__message");
      this.quoteAuthorElem = this.getElem("quote__author");
      this.newQuoteBtn = this.getElem("next__quote__btn");
      this.shareTwitterBtn = this.getElem("twitter__btn");
      this.errorElem = this.getElem("error");
    }
  
    render(quote) {
      this.quoteMessageElem.textContent = quote?.content || "";
      this.quoteAuthorElem.textContent = quote?.author || "";
    }
  
    disableTwitterBtn() {
      this.shareTwitterBtn.setAttribute("href", "javascript:void(0)");
    }
  
    renderError(error) {
      this.errorElem.textContent = `Oops! Something went wrong. ${error}`;
      this.render();
    }
  
    getElem(id) {
      return document.getElementById(id);
    }
  }

  export default QuoteView;