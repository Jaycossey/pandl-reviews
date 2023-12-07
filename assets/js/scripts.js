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
    let path = `./assets/text-files/${bandName}.txt`;
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
        albumArt.src = './assets/images/' + bandName + '.PNG';
        // fetch text data of reviews
        fetchReviews();
        // console.log(bandName);
        // console.log(event.target);
    }
})


// SUBMIT FORM BUTTON HANDLE ----------------------------------------------

emailForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);

    // target all form elements
    let email = document.getElementById('formInputEmail');
    let artist = document.getElementById('bandNameInput');
    let location = document.getElementById('locationInput');
    let releasedStatus = document.getElementById('formReleasedInput');
    let genre = document.getElementById('formInputGenre');
    let musicLink = document.getElementById('musicLinkInput');

    // if any input is empty or invalid
    // then prompt with highlighting to fill that element
    // else submit form and send email via separate function -- need to research how this would work
})

/**
 * Planning for form element: 
 * I need to handle submission of all elements within the form, 
 * The elements are:
 * - email
 * - artist name
 * - location
 * - released status
 * - genre
 * - music link
 * 
 * Each of these elements need a valid input to register a submission
 * 
 * once all inputs are valid then I need to send the data to: pandltunes@gmail.com
 * 
 * I need to store the data in an object called ""
 */