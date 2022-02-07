import React from "react";
import { withRouter } from 'react-router-dom';
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";
// import socket from "../utility/socketioConnection";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }
  setEmail(email) {
    this.setState({email:email})
  }
  setPassword(password) {
    this.setState({password: password})
  }
  fetchFeeders(response){
    const station_id = response.data.station_id
    const url = `/equipment?station_id=${station_id}`;
    fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(result => result.json())
    .then(res => {
      const  resp = res.res;
      const feeders = resp.filter(re => re.type === 'feeder');
      const lines_132 = resp.filter(re => re.type === 'line' && re.level === 132);
      const lines_330 = resp.filter(re => re.type === 'line' && re.level === 330);
      const txfrs_132 = resp.filter(re => re.type === 'txfr' && re.level === 132);
      const txfrs_330 = resp.filter(re => re.type === 'txfr' && re.level === 330);
      const reactors_132 = resp.filter(re => re.type === 'reactor' && re.level === 132);
      const reactors_330 = resp.filter(re => re.type === 'reactor' && re.level === 330);
      const feederArray = [];
      const lineArray_132 = [];
      const lineArray_330 = [];
      const txfrArray_132 = [];
      const txfrArray_330 = [];
      const reactorArray_132 = [];
      const reactorArray_330 = [];      
      feeders.map( res => feederArray.push(res.name));
      lines_132.map( res => lineArray_132.push(res.name));
      lines_330.map( res => lineArray_330.push(res.name));
      txfrs_132.map( res => txfrArray_132.push(res.name));
      txfrs_330.map( res => txfrArray_330.push(res.name));
      reactors_132.map( res => reactorArray_132.push(res.name));
      reactors_330.map( res => reactorArray_330.push(res.name));
      // Store the items in localstorage and push to state in app
      localStorage.setItem("feeders", feederArray);
      localStorage.setItem("lines_132", lineArray_132);
      localStorage.setItem("lines_330", lineArray_330);
      localStorage.setItem("txfrs_132", txfrArray_132);
      localStorage.setItem("txfrs_330", txfrArray_330);
      localStorage.setItem("reactors_132", reactorArray_132);
      localStorage.setItem("reactors_330", reactorArray_330);
      localStorage.setItem("station", response.data.station);
      localStorage.setItem("station_id", response.data.station_id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.userName);
       //pass the user data to the state of the App
      this.props.setUser();
      this.props.history.push({pathname: `/dashboard`});
    }); 
  }
  handleSubmission = (e) => {
    e.preventDefault();
    const url = "/signin";
    const email = this.state.email;
    const password = this.state.password;
    if (email === "" || password === "") {
      return;
    }
    const data = { email, password };
    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((response) => {
      //fetch the equipments
      this.fetchFeeders(response);
    })
    .catch((error) => console.error(error.message));
  };
  render() {
    return (
      <div className="py-4 responders-bg container-fluid bg-light">
        <div className="row mt-4">
          <div className="col-sm-4 mx-auto mt-4 pt-4 bg-white shadow">
            <div className="login-bg"></div>
            <form className="mt-3" onSubmit={this.handleSubmission} autoComplete="on">
              <Text
                type={"email"}
                placeholder={"User Email"}
                name={"email"}
                icon={"fa fa-envelope"}
                nameChange={ this.setEmail }
              />
              <Text
                type={"password"}
                placeholder={"Password"}
                name={"password"}
                icon={"fa fa-lock"}
                nameChange={ this.setPassword }
              />
              <Link
                question="Not Registered? "
                link="Sign Up"
                linkTo="/signup"
              />
              <Button id="" text={"Login"} onClick={() => "coming"} />
            </form>
          </div>
        </div>
      </div>
    );
  }  
};

export default withRouter(SignIn);
