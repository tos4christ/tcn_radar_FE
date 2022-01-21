import React from 'react';
import {withRouter} from 'react-router';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male'
    }
  }
  handleChange = e => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className='col-6 welcome-div'>

            <div className='heading text-center'>
              <h2>Welcome Back</h2>
            </div>
            <div className='text-center'>
              <p className='h5'> To keep connected to your team mates, sign up and start posting
                  gifs and articles
              </p>
            </div>
            <div className='text-center'>
              <button type='button' className='btn signupButton col-4'>Sign up</button>
            </div>

          </div>
          <div className='col-6 bg-signin'>
            <div className='form-div'>
              <form autoComplete="on">
                <h1 className='g-fonts my-5 ml-5 pl-5 text-white'>
                  Sign In
                </h1>
                     {/* Another div here to contain form inputs */}
                <div className='input-group col-8'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text far fa-envelope'></span>
                  </div>
                  <input type='email' ref={input => this.email = input} placeholder='Enter your email' className='form-control' id='email' />
                </div>
                <div className='input-group col-8 my-2'>
                  <div className='input-group-prepend'>
                    <i className='input-group-text fa fa-lock'></i>
                  </div>
                  <input type='password' ref={input => this.password = input} placeholder='Enter your password' className='form-control' id='password' />
                </div>
                <div className='form-group col-8 my-4'>
                  <div className='custom-control custom-control-inline custom-radio'>
                    <input type='radio' ref={input => this.employee = input} onChange={this.handleChange} id='employee' className='custom-control-input' name='roles' value='employee' />
                    <label for='employee' className='custom-control-label'>Employee</label>
                  </div>
                  <div className='custom-control custom-control-inline custom-radio'>
                    <input type='radio' ref={input => this.admin = input} onChange={this.handleChange} id='admin' className='custom-control-input' name='roles' value='admin' />
                    <label for='admin' className='custom-control-label'>Admin</label>
                  </div>
                </div>
                <div className='custom-control custom-checkbox ml-3 my-3'>
                  <input  type='checkbox' className='custom-control-input' id='remember'/>
                  <label className='custom-control-label rem-font' for='remember'>
                    Remember me
                  </label>
                </div>
                <div>
                  <button type='submit' className='btn bg-signin loginButton col-4'> Submit </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn);
