/**
 * BGootstrap of the application
 */
import { 
    QuoteController, 
    QuoteModel, 
    QuoteView 
} from './js/index.js';

class App {
  static start = () => new QuoteController(new QuoteView(), new QuoteModel());
}

document.addEventListener("DOMContentLoaded", (e) => App.start());
