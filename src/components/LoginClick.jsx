import React from "react"
import ReactDOM from "react-dom"

class LoginClick extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)


        this.state = {
            isLoggedIn : false
        }
    }

    handleClick(){
        this.setState(prevState =>{
            return {
                isLoggedIn : !prevState.isLoggedIn
            }
        })
        console.log("im a working for you !!");
    }
    render(){
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged Out" : "Logged In"
        return(
            <div>
                <button onClick={this.handleClick}>Click !</button>
                {displayText}

            </div>
        )
    }
}

export default LoginClick