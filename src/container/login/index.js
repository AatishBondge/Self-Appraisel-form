import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import { Grid, TextField, InputLabel, FormControl, OutlinedInput, InputAdornment, IconButton, Button} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName : '',
            password: '',
            showPassword: false,
        }
    }

    onSubmit = () =>{
        axios({
            method: 'GET',
            url: 'http://www.mocky.io/v2/5dd26cd73300000e007a3b69#',
            }).then(res => {
                console.log(res);
                // res.status === 'success' ? <Redirect to='/dashboard' /> : null
            })
    }


    render() { 
        const { showPassword, password } = this.state;

        const handleChange = prop => event => {
            this.setState({ [prop]: event.target.value });
        };
        
        const handleClickShowPassword = () => {
        this.setState({showPassword: !showPassword });
        };

        return ( 
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={3}>
                <TextField id="outlined-basic" label="Email id / Username" variant="outlined" onChange={handleChange('userName')} style={{width : '350px', marginBottom : '15px'}}/>

                <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={ showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                    style={{width : '350px'}}
                />
                </FormControl>

                <Button onClick={this.onSubmit}>Submit</Button>
                </Grid>   
            </Grid> 
         );
    }
}
 
export default Login;