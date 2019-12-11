import React from 'react';
import { Redirect } from 'react-router-dom'
import { getAuthenticate } from '../../actions/userAction'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username : '',
      password : '',
      user : null
     }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  inputValidation = () => {
    const { username, password } = this.state;
    let isValid = false;
    const noSpace = /^\S*$/;
    if (noSpace.test(username) && noSpace.test(password) && username !== '' && password !== '') {
        isValid = true;
    }
    return isValid;
  }

  onSubmit = () => {
    const isValid = this.inputValidation();
    const { username, password } = this.state;
    if(isValid) 
      this.props.getAuthenticate({username, password})
    
  }

  render() { 
    const { userData } = this.props;
    console.log(userData);
    return ( 
    userData === null ? 
      <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='container'>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {this.handleChange('username')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = { this.handleChange('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>   
    </> 
    : <Redirect to='/dashboard' />
     );
  }
}
 
const mapStateToProps = (state) => ({
  userData : state.setUserDataReducer.userData
})

const mapDispatchToProps = (dispatch) => ({
  getAuthenticate : (user) => dispatch(getAuthenticate(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);