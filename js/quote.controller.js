
import { QuoteService } from './index.js';
import { QUOTES_API_URL, TWITTER_SHARE_URL } from './config.js';

/**
 * Class to control all the operations and events of the app
 * It registers DOM events from the view
 * It communicates with the external services
 */

class QuoteController {
    constructor(view, model) {
      this.view = view;
      this.model = model;
      this.service = new QuoteService(QUOTES_API_URL);
  
      this.view.newQuoteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.getNewQuote();
      });
      this.view.newQuoteBtn.click();
    }
  
    async getNewQuote() {
      this.view.disableTwitterBtn();
      this.view.render({ content: "Loading...", author: "Loading..." });
  
      try {
        const quote = await this.service.getQuote();
        this.model.setQuote(quote);
        this.view.render(this.model.getQuote());
        this.view.shareTwitterBtn.setAttribute(
          "href",
          `${TWITTER_SHARE_URL}https://api.quotable.io/quotes/${quote._id}&text=${quote.content}`
        );
      } catch (error) {
        this.view.renderError(error.message);
        return;
      }
    }
  }

  export default QuoteController;