import ReactDOM from "react-dom";
import {render} from "react-dom";
import React from "react";
import LoginPage from "./Login";
import RegistrationPage from "./Registration";
import ManagerPage from "./ManagerSession";


 class PageManager extends React.Component{
    constructor(){
        super();
        this.state = {
            userId:window.sessionStorage.getItem('accessToken'),
            staffCategory: sessionStorage.getItem('staffCategory')
        };
        this.handleLogin =  this.handleLogin.bind(this);
        this.handleLogout =  this.handleLogout.bind(this);
    }

    handleLogin(credentials){
        this.setState({userId: credentials.userId});
    }
    handleLogout(){
        this.setState({userId: null})
    }

    render(){
        return (
            <div>
            {this.state.userId ? 
               <ManagerPage logout={this.handleLogout}/>: <LoginPage onClick = {this.handleLogin}/>
            }
            </div>
        )        
    }
}

render(<PageManager/>, document.getElementById("page-container"));