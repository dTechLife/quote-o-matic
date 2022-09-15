import React from "react";
import style from "./quoteBox.module.css";
export function QuoteBox({ quotes, currentQuote, newQuote }) {
  const url = "http://twitter.com/intent/tweet?text=";

  return (
    <div
      id="quote-box"
      className={`${style.quoteBox} shadow-sm p-3 mb-5 bg-white rounded`}
    >
      {console.log(style)}
      {quotes && (
        <div>
          <em>
            <p className={style.text}>"{quotes[currentQuote].quote}"</p>
          </em>
          <p className={`${style.text}`} id="author">
            -{quotes[currentQuote].author}
          </p>
          <button
            type="button"
            id="new-quote"
            className={`btn btn-primary`}
            onClick={newQuote}
          >
            New Quote
          </button>
          <a
            target="_top"
            className={`${style.tweetQuote} bi bi-twitter`}
            href={`${url} ${quotes[currentQuote].quote} -${quotes[currentQuote].author}`}
          >
            Post to Twitter
          </a>
        </div>
      )}
    </div>
  );
}
