
// let apiQuotes = [];

// Show new quote
function newQuote() {
    // pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);

}
// // Get Quotes from API
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();

//     }catch (error) {
//         //Catch Error here
//     }
// }

// //On load
// getQuotes();

//local quotes
newQuote();