import ReactDOM from "react-dom";
import React from "react";
import { render } from "react-dom";
import $ from "jquery";


const formBackground = {
    display: 'inline-block',
    padding: '32px 48px 0px 48px',
    border: '1px solid #EEE'
};
function validateUser(email, password, callback){
    $.ajax({
            url: "/token",
            method: "POST",
            contentType: "application/json",
            data: {
                Username: email,
                Password: password,
                grant_type: "password"
            },
            success: function (response) {
                callback(response);
                registerStaff();

            },
            error: function (jqXHR) {
                callback(null, error)
            }
        });
}
function registerStaff() {
        $.ajax({
            url: "api/Staff",
            method: "Post",
            contentType: "application/json",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("accessToken")
            },
            success: function (response) {
                console.log(response);
            },
            error: function (jqXHR) {
                console.log(jqXHR.responseText);
            }
        });
    }



class LoginPage extends React.Component {
    constructor(){
        super();
        this.onValidate = this.onValidate.bind(this);
    }
    onValidate(e){
        e.preventDefault();
        //const onClick = this.props.onclick
        const {onClick} =  this.props;
        validateUser(this.email.value, this.password.value, (response, error)=>{
            if(response){
                sessionStorage.setItem("accessToken", response.access_token);
                sessionStorage.setItem('expires', response['.expires']);
                sessionStorage.setItem('username', response.userName);
                sessionStorage.setItem('userid', response.userId);
                onClick(response)
            }else{
                console.log(error);
            }
        })
        // debugger;
    }
    render() {
        const props = this.props;
        return (
            <div>
                <main>
                    <center>
                        <div className="section"></div>

                        <h5 className="indigo-text">Please, login into your account</h5>
                        <div className="section"></div>

                        <div className="container">
                            <div className="z-depth-1 grey lighten-4 row" style={formBackground}>

                                <form className="col s12" method="post">
                                    <div className='row'>
                                        <div className='col s12'>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' ref={(email)=>{this.email = email}} type='email' name='email' id='email' />
                                            <label htmlFor='email'>Enter your email</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' ref={(password)=>{this.password=password}} type='password' name='password' id='password' />
                                            <label htmlFor='password'>Enter your password</label>
                                        </div>
                                        <label style={{ float: 'right' }}>
                                            <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                        </label>
                                    </div>

                                    <br />
                                    <center>
                                        <div className='row'>
                                            <button onClick={this.onValidate} type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                                        </div>
                                    </center>
                                </form>
                            </div>
                        </div>
                        <a href="#!">Create account</a>
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>
                </main>
            </div>
        )
    }
}

export default LoginPage;