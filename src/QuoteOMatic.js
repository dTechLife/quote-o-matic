import React from "react";

import { QuoteBox } from "./QuoteBox";
import { quotes } from "./quotes.js";

class QuoteOMatic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 0,
      quotes,
      totalQuotes: quotes.length - 1,
      history: [],
    };
  }

  newQuote = () => {
    let { totalQuotes } = this.state;

    function shuffleQuote(currentQuote) {
      TODO: "Replace this with a more modern approach...";

      let rand = currentQuote;
      while (rand === currentQuote) {
        //randomize until different
        rand = Math.floor(Math.random() * totalQuotes);
      }
      return rand;
    }

    this.setState((prevState) => {
      //returns a random quote within the range of totalQuotes
      let randomQuote = shuffleQuote(prevState.currentQuote);
      return {
        currentQuote: randomQuote,
      };
    });
  };

  render() {
    const currentQuote = this.state.currentQuote;
    return (
      <React.Fragment>
        <QuoteBox
          quotes={quotes}
          currentQuote={currentQuote}
          newQuote={this.newQuote}
        />
      </React.Fragment>
    );
  }
}

export default QuoteOMatic;
