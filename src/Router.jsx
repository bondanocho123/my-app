import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Movies from "./components/Movie/MoviesDisplay.jsx"
import Persons from "./components/Persons/PersonList.jsx"

export default ()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Persons}></Route>
                    <Route path="/movies" component={Movies}></Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}