/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// quotes source: https://www.boredpanda.com/funny-inspirational-quotes/
const quotes = [
  {
    quote: "Life is hard. After all, it kills you.",
    source: "Katharine Hepburn"
  },
  {
    quote: "Whatever you do, always give 100% — unless you're donating blood.",
    source: "Bill Murray"
  },
  {
    quote: "Worrying is like paying a debt you don't owe.",
    source: "Mark Twain"
  },
  {
    quote: "The road to success is always under construction.",
    source: "Lily Tomlin"
  },
  {
    quote: "Be happy, it drives people crazy.",
    source: "Paulo Coelho"
  },
  {
    quote: "I love a good nap. Sometimes it's the only thing getting me out of bed in the morning.",
    source: "George Costanza",
    citation: "Seinfeld"
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Yoda",
    citation: "Star Wars Episode V: The Empire Strikes Back",
    year: 1980
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);