import React, {Component} from "react"
import ReactDOM from "react-dom"
import Movies from "./Movies"
import Header from "../Header/Header"


class MoviesDisplay extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Header />

                <Movies />
            </div>
        )
    }
}

export default MoviesDisplay