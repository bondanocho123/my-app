import React from "react"
import ReactDOM from "react-dom"
import './Movie.css'

class Movie extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="movie">
                <h2>{this.props.meta.title}</h2>
                <div><img width="200" height="250" src={this.props.meta.poster}/></div>
                <p>({this.props.meta.year})</p>
                <p>({this.props.meta.description})</p>
            </div>
        )
    }
}

export default Movie