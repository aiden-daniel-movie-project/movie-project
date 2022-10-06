$(function (){
// On page load:
// Make an AJAX request to get a listing of all the movies
    const Movies = {
        URL: 'https:fuchsia-almondine-fisher.glitch.me/movies',
        getRequest(){
            return  fetch(`${Movies.URL}`).then(resp => resp.json());
        },
        // newMovieOptions: {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(/*new movie reference*/)
        // },
        // newMovieRequest() {
        //     fetch(Movies.URL, Movies.newMovieOptions).then(Movies.getRequest);
        // },
        // editOptions: {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(modification)
        // },
        // editRequest() {
        //     fetch(Movies.URL + /*string with '/data-id'*/, Movies.editOptions).then(Movies.getRequest);
        // },
        // deleteOptions: {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // },
        // deleteRequest() {
        //     fetch(Movies.URL + /*string with '/data-id'*/, Movies.deleteOptions).then(Movies.getRequest);
        // }
        async insertMovieCards(){
            try {
                let movieArray = await Movies.getRequest();
                console.log(movieArray)

                for (let movieArrayIndex = 0; movieArrayIndex < movieArray.length; movieArrayIndex++) {
                        // $('.carousel-indicators').html(`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${movieArrayIndex}" aria-label="Slide ${movieArrayIndex + 1}"></button>`)
                        $('#movie-card-container').append(`
<div class="card">
    <div id="card-${movieArray[movieArrayIndex].id}" class="d-flex-column">
        <header>
            <h2 class="card-title me-auto">${movieArray[movieArrayIndex].title}</h2>
                <div id="movie rating" class="me-auto">
                    ***** (${movieArray[movieArrayIndex].rating}/ 5)
                </div>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-movie-modal">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
        </header>
            <div class="poster-size-control">
                <img class="img-fluid" src=${movieArray[movieArrayIndex].poster} alt="Card image cap">
            </div>
            <div class="card-body">
                <p class="card-text">${movieArray[movieArrayIndex].title} will be coming soon to a theatre near you! <br> ${movieArray[movieArrayIndex].plot}</p>
            </div>
    </div>
</div>
`)

                }
            }
            catch (err){
                console.log('good')
            }
        }
    }

    Movies.insertMovieCards();
    // $.get()

// Allow users to add new movies
// Create a form for adding a new movie that has fields for the movie's title and rating
// When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

// Allow users to edit existing movies
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

// Delete movies
// Each movie should have a "delete" button
// When this button is clicked, your javascript should send a DELETE request

// Bonuses
// Display a "loading..." message
// When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives
// Add a disabled attribute to buttons while their corresponding ajax request is still pending.
// Show a loading animation instead of just text that says "loading...".
// Use modals for the creating and editing movie forms.
// Add a genre property to every movie.
// Allow users to sort the movies by rating, title, or genre (if you have it).
// Allow users to search through the movies by rating, title, or genre (if you have it).
// Use a free movie API like OMDB to include extra info or render movie posters.

// Helpful Hints
// The id property of every movie should not be edited by hand. The purpose of this property is to uniquely identify that particular movie. That is, if we want to delete or modify an existing movie, we can specify what movie we want to change by referencing it's id. When a new movie is created (i.e. when you send a POST request to /movies with a title and a rating), the server will respond with the movie object that was created, including a generated id.
// Take a look at the other branches in this repository, as they have configuration/setup for common scenarios, such as including bootstrap in your application.


    /*structure

       new movie button

    cards
    1) nav contatining the following:
       a) delete button
       b) edit button
           I) edit form display:none until edit button is clicked

     */
});