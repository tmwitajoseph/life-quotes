const quotes = [
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "In the end, we only regret the chances we didn’t take. - Lewis Carroll",
  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson"
];

let currentQuoteIndex = 0;
let savedQuotes = [];

const quoteDisplay = document.getElementById('quote-text');
const nextQuoteButton = document.getElementById('next-quote');
const saveQuoteButton = document.getElementById('save-quote');
const deleteQuoteButton = document.getElementById('delete-quote');
const savedQuoteList = document.getElementById('quote-list');

// Function to display the next quote
nextQuoteButton.addEventListener('click', () => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quoteDisplay.innerText = quotes[currentQuoteIndex];
});

// Function to save the current quote
saveQuoteButton.addEventListener('click', () => {
  if (!savedQuotes.includes(quotes[currentQuoteIndex])) {
    savedQuotes.push(quotes[currentQuoteIndex]);
    displaySavedQuotes();
  }
});

// Function to delete the current quote from saved list
deleteQuoteButton.addEventListener('click', () => {
  savedQuotes = savedQuotes.filter(quote => quote !== quotes[currentQuoteIndex]);
  displaySavedQuotes();
});

// Function to display the saved quotes
function displaySavedQuotes() {
  savedQuoteList.innerHTML = '';
  savedQuotes.forEach(quote => {
    const listItem = document.createElement('li');
    listItem.innerText = quote;
    savedQuoteList.appendChild(listItem);
  });
}