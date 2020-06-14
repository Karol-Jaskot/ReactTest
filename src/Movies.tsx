import React from 'react';
import './App.css';
import './components/Movie';
import Movie from "./components/Movie";

class Movies extends React.Component{
    render() {
        return <div>
            <button>Klik</button>
            <Movie movies={this.state.movies} />
            <h2>Wyżej jest lista</h2>
        </div>
    }

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('https://afternoon-waters-37189.herokuapp.com/api/movies')
            .then(res => res.json())
            .then((data) => {
                this.setState({ movies: data })
            })
            .catch(console.log)
    }
}

export default Movies;