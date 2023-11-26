// GLOBALS ----------------------------------------------------------------
// const albumReviewContainer = document.getElementById('accordionAlbum');

// Band name storage - handles searches and fetch
let bandName = "lune";
let currentReview;

// FUNCTIONS TO CREATE NEW ACCORDIAN ELEMENT ------------------------------

// Fetch request for each review
function fetchReviews() {
    // Get data 
    let customPath = `assets/text-files/${bandName + ".txt"}`;
    // let customPath = 'lune.txt';

    const myRequest = new Request(customPath);
    fetch(myRequest, {
        headers: {
            'Content-Type': 'text/plain'
        },
        mode: 'no-cors',
        method: 'GET'
    })
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error(`Error, status = ${response.status}`);
            }
            console.log(response.text());
            return response.text();
        })
        .then((text) => {
            console.log(text);
        });
}

fetchReviews();


// Create element for the dropdown
function createAccordEl() {
    /**
     * // PARENT
    <div class="card">
        // CHILD 1 - BUTTON DIV
        <div class="card-header" id="headingOne">
            <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
            </button>
            </h5>
        </div>
        // CHILD 2 - CONTENT DIV
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>

    </div>

This is the template from bootstrap docs, I want to make this dynamically with this function

I ONLY NEED TO CREATE THE ELEMENTS WITH THIS FUNCTION!!!! TAKE NOTE OF THE EXACT DIV AND CHILDREN REQUIRED!!!!

I need a parent div, which contains both the collapse button and the content div. 

     */
}

// Assign Data
function assignReviews() {
    // call the create Element 
    // assign data
}