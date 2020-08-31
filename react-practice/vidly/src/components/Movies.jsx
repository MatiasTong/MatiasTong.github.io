


import React, { Component } from "react"
import { getMovies } from '../services/fakeMovieService'
import Like from './common/Like.jsx'
import Pagination from './common/Pagination.jsx'
import { paginate } from '../utils/paginate'
import ListGroup from "./common/ListGroup"
import { getGenres } from "../services/fakeGenreService"

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() })
    }

    handleDelete = (movie) => {
        //create an array with movies excluding the movie to delete  
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        //modern Javascript syntax movies: movies can be simplified to movies
        this.setState({ movies })
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie)
        // movies[index] = { ...movies[index]}
        movies[index].liked = !movies[index].liked
        this.setState({ movies })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = genre => {
       this.setState({selectedGenre : genre});
    }

    render() {
        // an array is an object with a length property
        const { length: count } = this.state.movies
        const { currentPage, pageSize, movies: allMovies } = this.state
        if (count === 0) return <p>There are no movies to display</p>

        const movies = paginate(allMovies, currentPage, pageSize)

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                    items={this.state.genres} 
                    selectedItem = {this.state.selectedGenre}
                    onItemSelect = {this.handleGenreSelect} />

                </div>
                <div className="col">
                    <p>showing {count} movies</p>
                    <table className="table">
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

                            {movies.map(movie => (
                                <tr key={movie._id}>
                                    <td> {movie.title} </td>
                                    <td>{movie.genre.name} </td>
                                    <td> {movie.numberInStock}</td>
                                    <td> {movie.dailyRentalRate} </td>
                                    <td> <Like liked={movie.liked} onToggle={() => this.handleLike(movie)} /> </td>
                                    <td><button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                                </tr>
                            )
                            )}

                        </tbody>
                    </table>

                </div>
            
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
            />
           </div>

        );
    }
}

export default Movies;