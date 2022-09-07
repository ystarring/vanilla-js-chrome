const quotes = [
  {
    quote: "True life is lived when tiny changes occur.",
    author: "Leo Tolstoy",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "A wise man will make more opportunities than he finds.",
    author: "Sir Francis Bacon",
  },
  {
    quote: "In the field of observation, chance favors only the prepared mind.",
    author: "Louis Pasteur",
  },
  {
    quote: "Employ thy time well, if thou meanest to get leisure.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The journey is the reward.",
    author: "Steve Jobs",
  },
  {
    quote: "I believe that one of life's greatest risks is never daring to risk.",
    author: "Oprah Winfrey",
  },
  {
    quote: "If I have lost confidence in myself, I have the universe against me.",
    author: "Ralph Waldo Emerson",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;