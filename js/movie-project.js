$(function (){
    /* todo
    finish new object
    call method on click for add

    make edit form prepoulated
    tie edit form to edit button
    tie delete method to delete button
     */

    const Movies = {
        URL: 'https:fuchsia-almondine-fisher.glitch.me/movies',
        getRequest(){
            return  fetch(`${Movies.URL}`).then(resp => resp.json());
        },
        newMovieContent: {
                        actors: '',
                        director: '',
                        genre: '',
                        id: '',
                        plot: $('#new-description-text').val(),
                        poster: '',
                        rating: $('#new-rating').val(),
                        title: $('#new-movie-title').val(),
                        year: ''
                        //for all of these im going to have to save the form values to a variabl
        },

        newMovieRequest() {
            fetch(Movies.URL, Content.newMovieOptions).then(Movies.getRequest);
        },
        editMovieContent: {
            actors: '',
            director: '',
            genre: '',
            id: '',
            plot: $('#edit-description-text').val(),
            poster: '',
            rating: $('#edit-rating').val(),
            title: $('#edit-movie-title').val(),
            year: ''
            //for all of these im going to have to save the form values to a variabl
        },

        // editRequest() {
        //     fetch(Movies.URL + Movies.editMovieContent.id, Movies.editOptions).then(Movies.getRequest);
        // },
        deleteOptions: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        deleteRequest(number) {
            let idNumber = number.slice(7);
            fetch(Movies.URL + `/${idNumber}`, Movies.deleteOptions).then(Movies.getRequest);
        },
        async insertMovieCards(){
            try {
                $('#movie-card-container').html('Loading...')
                let movieArray = await Movies.getRequest();
                $('#movie-card-container').html('')
                for (let movieArrayIndex = 0; movieArrayIndex < movieArray.length; movieArrayIndex++) {
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
                                             <li class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-movie-modal-${movieArray[movieArrayIndex].id}">Edit</li>
                                             <li class="dropdown-item" id="delete-${movieArray[movieArrayIndex].id}">Delete</li>
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
                        <div class="modal fade" id="edit-movie-modal-${movieArray[movieArrayIndex].id}" tabindex="-1" aria-labelledby="new-modal-label" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="edit-modal-label"> Edit Movie</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label for="edit-movie-title" class="col-form-label">Edit Title:</label>
                                                <input type="text" class="form-control" id="edit-movie-title" value="${movieArray[movieArrayIndex].title}">
                                            </div>
                                            <div class="mb-3">
                                                <label for="edit-description-text" class="col-form-label">Edit Description:</label>
                                                <textarea class="form-control" id="edit-description-text">${movieArray[movieArrayIndex].plot}</textarea>
                                            </div>
                                            <div class="mb-3 btn-group dropend">
                                                <label for="edit-rating" class="col-form-label">Rating:</label>
                                                <button class="form-control dropdown-toggle" type="button" data-bs-toggle="dropdown" id="edit-rating"></button>
                                                <ul class="dropdown-menu">
                                                    <li id="one-star"    class="dropdown-item">1</li>
                                                    <li id="two-stars"   class="dropdown-item">2</li>
                                                    <li id="three-stars" class="dropdown-item">3</li>
                                                    <li id="four-stars"  class="dropdown-item">4</li>
                                                    <li id="five-stars"  class="dropdown-item">5</li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="edit-button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>`)
                }
            } catch (err){
                console.log('It didnt work')
            }
        }
    }
    const Content = {
        newMovieOptions: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Movies.newMovieContent)
        },
        editOptions: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Movies.editMovieContent)
        }
    }
    Movies.insertMovieCards();
    $('#add-new-button').on('click',function(){
        Movies.newMovieRequest();
        Movies.insertMovieCards();
    })

    $('#delete-0').on('click',function(){
        Movies.deleteRequest('delete-0');
    })
    $('#delete-1').on('click',function(){
        Movies.deleteRequest('delete-1');
    })
    $('#delete-2').on('click',function(){
        Movies.deleteRequest('delete-2');
    })
    $('#delete-3').on('click',function(){
        Movies.deleteRequest('delete-3');
    })
    $('#delete-4').on('click',function(){
        Movies.deleteRequest('delete-4');
    })
    $('#delete-5').on('click',function(){
        Movies.deleteRequest('delete-5');
    })
    $('#delete-6').on('click',function(){
        Movies.deleteRequest('delete-6');
    })
    $('#delete-7').on('click',function(){
        Movies.deleteRequest('delete-7');
    })
    $('#delete-8').on('click',function(){
        Movies.deleteRequest('delete-8');
    })


// Allow users to add new movies
// When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

// Allow users to edit existing movies
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.


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