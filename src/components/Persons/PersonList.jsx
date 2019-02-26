import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import Header from "../Header/Header"


class PersonList extends React.Component{
    constructor(){
        super()

        this.state = {
            persons : [],
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                console.log(res)
                this.setState({persons : res.data})
            })
    }

    render(){
        return(
            <div>
                <Header />
                <ul>
                    {this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>

            </div>
        )
    }
}

export default PersonList