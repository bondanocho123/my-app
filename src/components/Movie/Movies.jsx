import React from "react"
import ReactDOM from "react-dom"
import "./MovieData"
import { initialMovies } from "./MovieData";
import Movie from "./Movie"
import Header from "../Header/Header"
import './Movie.css'

class Movies extends React.Component{
    constructor(){
        super()

        this.state = {
            movies : initialMovies
        }
    }

    render(){
        return(
                <div className="movies">
                    {
                        Object
                            .keys(this.state.movies)
                            .map(key => <Movie key={key} meta={this.state.movies[key]} />)
                    }
            </div>
            
            
        )
    }
}

export default Movies