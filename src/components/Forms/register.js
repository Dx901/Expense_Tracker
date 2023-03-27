import React, { Component } from "react";
import './login.css'

class Register extends Component {
    state = {
        email: '',
        password: '',
        dispalayName: '',
        fireErrors: ''
    }

    render () {
        return(
            <>
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="Your Name"
                        name="name"
                    />

                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        name="email"
                    />

                    <input type="password"
                        className="regField"
                        placeholder="Password"
                        name="password"
                    />

                    <input type="submit" 
                            className="submitBtn"
                            value="Enter"
                    />

                </form>
            </>
        )
    }
}

export default Register