/******************************************
Cassia Nebel's
project 1 - A Random Quote Generator
******************************************/

// handpicked quotes from: https://www.boredpanda.com/funny-inspirational-quotes/
const quotes = [
  {
    quote: "Life is hard. After all, it kills you.",
    source: "Katharine Hepburn",
    tag:"thoughts-on-life"
  },
  {
    quote: "Whatever you do, always give 100% — unless you're donating blood.",
    source: "Bill Murray",
    tag: "advice"
  },
  {
    quote: "Worrying is like paying a debt you don't owe.",
    source: "Mark Twain",
    tag:"thoughts-on-life"
  },
  {
    quote: "The road to success is always under construction.",
    source: "Lily Tomlin",
    tag:"thoughts-on-life"
  },
  {
    quote: "Be happy, it drives people crazy.",
    source: "Paulo Coelho",
    tag: "advice"
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
    year: 1980,
    tag: "advice"
  }
];



// selects a random quote from an array of quotes
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}


// sets up the html from a random quote and replaces 'quote-box' inner html
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
  if (quote.tag) {
    html += `<span class="tag"> #${quote.tag}</span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}


// 'load-quote' button click - displays the next random quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);