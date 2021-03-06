import React from "react"
import ReactDOM from "react-dom"
import "./Header.css"
import {Menu, Icon} from "antd"
import {Link} from "react-router-dom"
import 'antd/dist/antd.css'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component{
    constructor(props){
        super()

        this.state = {
            current : "mail",
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) =>{
        console.log("click", e);
        this.setState({
            current : e.key,
        })
    }

    render(){
        return(
            <div className="header">
                <Menu onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="galery" >
                        <Link to="/movies"><Icon type="galery" />Galery</Link>
                    </Menu.Item>
                </Menu>
            </div>
            
            

        //   <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
        //     <MenuItemGroup title="Item 1">
        //       <Menu.Item key="setting:1">Option 1</Menu.Item>
        //       <Menu.Item key="setting:2">Option 2</Menu.Item>
        //     </MenuItemGroup>
        //     <MenuItemGroup title="Item 2">
        //       <Menu.Item key="setting:3">Option 3</Menu.Item>
        //       <Menu.Item key="setting:4">Option 4</Menu.Item>
        //     </MenuItemGroup>
        //   </SubMenu>
        //   <Menu.Item key="alipay">
        //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        //   </Menu.Item> 
        )
    }
}

export default Header