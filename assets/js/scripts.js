// GLOBALS ----------------------------------------------------------------
const reviewTextContainer = document.getElementById('reviewText');
const accordionElement = document.getElementById('reviewAccordion');

// Band name storage - handles searches and fetch
let bandName = "lune";
let currentReview;

// FUNCTIONS TO CREATE NEW ACCORDIAN ELEMENT ------------------------------

// THIS IS THE FIX!!! needs to be run in the live server to show the log properly (extension wasnt working, or I had the wrong one)
// credit for fix => @juhuyoon - github
// Arrow function to handle async fetch
const fetchReviews = async () => {
    // custom path for each file
    let path = `./assets/text-files/${bandName}.txt`;
    // console.log(path);
    // fetch data 
    fetch(path, {mode: 'no-cors'})
        .then((response) => {
            return response.text();
        })
        // assign text to element.
        .then((data) => {
            // console.log(data);
            reviewTextContainer.innerText = data;
        })
}

fetchReviews();

accordionElement.addEventListener('click', function(event) {
    // console.log(event.target);
    if (event.target instanceof HTMLButtonElement) {
        bandName = event.target.innerText;
        fetchReviews();
        console.log(bandName);
        console.log(event.target);
    }
})