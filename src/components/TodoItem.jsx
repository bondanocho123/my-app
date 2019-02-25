import React from "react"
import ReactDOM from "react-dom"

class TodoItem extends React.Component{
    constructor(props){
        super()
    }

    render(){
        
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.completed} 
                    onChange={() => {console.log("Changed !!")}}></input>
                <p>{this.props.text}</p>

            </div>
        )
    }
}

export default TodoItem