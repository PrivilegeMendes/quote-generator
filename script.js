// bugs to fix
/* Bugs to fix
New quote button sometimes does not update. could the randomizer produce the same quote element in the array? 

*/

// Make sure your id matches the one in the html script
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// let apiQuotes = [];

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}


// Show new quote
function generateNewQuote() {
    // add loading icon
    showLoadingSpinner();
    // pick random quotes from my quotes.js script
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if author field is blank and replace if unknown
    if (!quote.author)
    {
        authorText.textContent = 'Unknown';
    }else {
        authorText.textContent = quote.author;
    }
    // Check quote length (in characters) to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set quote and hide the loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();

}
// // Get Quotes from API
// async function getQuotes(){
//   showLoadingSpinner();
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
// 
//     }catch (error) {
//         //Catch Error here
//          console.log(error)
//          getQuote();
//     }
// }

// getQuotes();
// Let//s tweet a quote!
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // open twitter in a new tab
    window.open(twitterUrl, '_blank');
}

// lets add some Event Listeners
newQuoteBtn.addEventListener('click', generateNewQuote);
twitterBtn.addEventListener('click', tweetQuote);

//use my local quotes
generateNewQuote();
