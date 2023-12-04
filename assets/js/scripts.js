// GLOBALS ----------------------------------------------------------------
const reviewTextContainer = document.getElementById('reviewText');
const accordionElement = document.getElementById('reviewAccordion');
const bandTitle = document.getElementById('bandNameDisplay');
const albumArtContainer= document.getElementById('albumArtContainer');

// Band name storage - handles searches and fetch
let bandName = "lune";
let albumArt = document.createElement('img');
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

// fetchReviews();

accordionElement.addEventListener('click', function(event) {
    albumArtContainer.appendChild(albumArt);

    // console.log(event.target);
    if (event.target instanceof HTMLButtonElement) {
        bandName = event.target.innerText;
        bandTitle.innerText = bandName;
        
        albumArt.id = "albumArt";
        albumArt.alt = bandName + " album art";
        albumArt.src = './assets/images/' + bandName + '.PNG';
        fetchReviews();
        console.log(bandName);
        console.log(event.target);
    }
})