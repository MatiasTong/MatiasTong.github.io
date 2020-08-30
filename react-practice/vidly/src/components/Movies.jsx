


import React, { Component } from "react"
import { getMovies } from '../services/fakeMovieService'
import Like from './common/Like.jsx'


class Movies extends Component {
    state = {
        movies: getMovies()
    }
    
    handleDelete = (movie) => {
      //create an array with movies excluding the movie to delete  
      const movies = this.state.movies.filter(m => m._id !== movie._id)
      //modern Javascript syntax movies: movies can be simplified to movies
      this.setState({movies})
    }

    render() {
       // an array is an object with a length property
       const {length: count} = this.state.movies
       if(count === 0 ) return <p>There are no movies to display</p>

        return (
            <div>
                <p>showing {count} movies</p>
            <table className = "table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>


                </thead>
                <tbody>
                     
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td> {movie.title} </td>
                            <td>{movie.genre.name} </td>
                            <td> {movie.numberInStock}</td>
                            <td> {movie.dailyRentalRate} </td>
                            <td> <Like/> </td>
                            <td><button className="btn btn-danger btn-sm" onClick = {() => this.handleDelete(movie)}>Delete</button></td>
                        </tr>
                    )
                    )}

                </tbody>
            </table>
            </div>


        );
    }
}

export default Movies;