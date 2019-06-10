import React from "react";

class LoginForm extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h3>Login</h3>
                    <form>
                        <label>username:</label>
                        <input type="text"></input>
                        <label>password:</label>
                        <input type="password"></input>
                        <button>login</button>
                    </form>
                </div>

                <div>
                    <h3>Create Account</h3>
                    <form>
                        <label>username:</label>
                        <input type="text"></input>
                        <label>password:</label>
                        <input type="password"></input>
                        <button>create account</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default LoginForm;