import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./components/test"
import Login from "./components/LoginClick"
import TodosData from "./components/TodosData"
import TodoItem from "./components/TodoItem"
import ChangingState from "./components/ChangingState"
import PersonList from "./components/Persons/PersonList"
import Header from "./components/Header/Header"
import Movies from "./components/Movie/Movies"
import {Menu, Icon} from "antd"
import DisplayMovies from './components/Movie/MoviesDisplay'
// import {Link} from "react-router-dom"
import 'antd/dist/antd.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      current: 'mail',
    }

    this.handleClick = this.handleClick.bind(this)
    
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  //todoitem
  handleChange(id){

    console.log("Changed", id);
  }

  

  render() {
    const todosData = TodosData.map(todos => <TodoItem key={todos.id} text={todos.text} completed={todos.completed}/>)
    return (

      
      <div className="App">
          <DisplayMovies />
          {/* <PersonList /> */}
          {/* <div >
            <Movies />
          

          </div> */}
          {/* <h1>Hwllo World1 </h1> */}

          
      </div>
    );
  }
}

export default App;
