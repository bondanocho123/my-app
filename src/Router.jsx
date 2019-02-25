import React from "react"
import {BrowserRouter, Route, Switch} from "react-router"
import Movies from "./componetns/Movie/Movies.jsx"

export default ()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"></Route>
                    <Route path="/movies" component={Movies}></Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}