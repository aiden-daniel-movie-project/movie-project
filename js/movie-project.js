$(function (){

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
        },
        editRequest() {
            fetch(Movies.URL + Movies.editMovieContent.id, Movies.editOptions).then(Movies.getRequest);
        },
        deleteOptions: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        deleteRequest(number) {
            fetch(Movies.URL + `/${number}`, Movies.deleteOptions).then(Movies.getRequest);
        },
        async insertMovieCards(){
            try {
                $('#movie-card-container').html('Loading...')
                let movieArray = await Movies.getRequest();
                $('#movie-card-container').html('')
                for (let movieArrayIndex = 0; movieArrayIndex < movieArray.length; movieArrayIndex++) {
                    $('#movie-card-container').append(`
                        <div class="card">
                            <div id="card-${movieArrayIndex}" class="d-flex-column">
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
                                             <li class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-movie-modal-${movieArrayIndex}">Edit</li>
                                             <li class="dropdown-item" id="delete-${movieArrayIndex}">Delete</li>
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
            $('#add-new-button').on('click',function(){
                Movies.newMovieRequest();
                Movies.insertMovieCards();
            })
            $('#delete-0').on('click',function(){
                alert("yo");
                Movies.deleteRequest('0');
                Movies.insertMovieCards();
            })
            $('#delete-1').on('click',function(){
                Movies.deleteRequest('1');
                Movies.insertMovieCards();
            })
            $('#delete-2').on('click',function(){
                Movies.deleteRequest('2');
                Movies.insertMovieCards();
            })
            $('#delete-3').on('click',function(){
                Movies.deleteRequest('3');
                Movies.insertMovieCards();
            })
            $('#delete-4').on('click',function(){
                alert('yo')
                Movies.deleteRequest('4');
                Movies.insertMovieCards();
            })
            $('#delete-5').on('click',function(){
                Movies.deleteRequest('5');
                Movies.insertMovieCards();
            })
            $('#delete-6').on('click',function(){
                Movies.deleteRequest('6');
                Movies.insertMovieCards();
            })
            $('#delete-7').on('click',function(){
                Movies.deleteRequest('7');
                Movies.insertMovieCards();
            })
            $('#delete-8').on('click',function(){
                Movies.deleteRequest('8');
                Movies.insertMovieCards();
            })
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




});