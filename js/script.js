/******************************************
Cassia Nebel's
project 1 - A Random Quote Generator
******************************************/

/**
 * an array of handpicked quotes from: 
 * https://www.boredpanda.com/funny-inspirational-quotes/
 */
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



/**
 * Returns a random quote from an array of quotes.
 *
 * @param {array} - The array of quotes.
 * @return {object} The random quote object from the array.
 */
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}


/**
 * Returns a random color.
 *
 * @return {string} The random color in rgb format.
 */
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


/**
 * Replaces the html of 'quote-box'
 * to display a random quote 
 * and replaces the body background-color
 * with a random color. 
 * Also resets the interval to auto-change quotes.
 */
function printQuote() {
  clearInterval(interval);

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

  let color = getRandomColor();
  document.querySelector('body').style.backgroundColor = color;

  interval = setInterval(printQuote, 10000);
}


/* displays the next random quote on 'load-quote' button click */
document.getElementById('load-quote').addEventListener("click", printQuote, false);


/* auto-changes the quote every 10 seconds */
let interval = setInterval(printQuote, 10000);