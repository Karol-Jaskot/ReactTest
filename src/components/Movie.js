import React from 'react'

const Movie = ({ movies }) => {
    return (
        <div>
            <center><h1>Lista filmów</h1></center>
            {movies.map((movie) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{movie.director}</h6>
                        <p class="card-text">{movie.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Movie