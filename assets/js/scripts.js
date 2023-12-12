// GLOBALS ----------------------------------------------------------------
const reviewTextContainer = document.getElementById('reviewText');
const accordionElement = document.getElementById('reviewAccordion');
const bandTitle = document.getElementById('bandNameDisplay');
const albumArtContainer = document.getElementById('albumArtContainer');
const formElement = document.getElementById('emailForm');

// Band data storage - handles searches and fetch
let bandName = "lune";
let currentReview;
// create element to handle album art
let albumArt = document.createElement('img');

// FUNCTIONS TO CREATE NEW ACCORDIAN ELEMENT ------------------------------


// THIS IS THE FIX!!! needs to be run in the live server to show the log properly (extension wasnt working, or I had the wrong one)
// credit for syntax fix => @juhuyoon - github

// Arrow function to handle async fetch
const fetchReviews = async () => {
    // custom path for each file
    let path = `./assets/text-files/${bandName.toLowerCase()}.txt`;
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

// add event listener for accordion element 
accordionElement.addEventListener('click', function(event) {
    // append album art element
    albumArtContainer.appendChild(albumArt);

    // console.log(event.target);
    // if element is of type Button and has class "reviewButton"
    if (event.target instanceof HTMLButtonElement && event.target.className == "reviewButton") {
        // update bandName text
        bandName = event.target.innerText;
        bandTitle.innerText = bandName;
        // update album art element
        albumArt.id = "albumArt";
        albumArt.alt = bandName + " album art";
        albumArt.src = './assets/images/' + bandName.toLowerCase() + '.png';
        // fetch text data of reviews
        fetchReviews();
        // console.log(bandName);
        // console.log(event.target);
    }
})

