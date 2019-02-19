import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class Login extends Component {

    render() {

        return (
            <form>
                <TextField
                    id="username"
                    label="Username"
                    margin="normal"
                />

                <TextField
                    id="password"
                    label="Password"
                    margin="normal"
                />
            </form>
        );
    }
}

export default Login;