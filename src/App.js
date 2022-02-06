
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import './components/css/tables.css';
import './components/css/style.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import "./components/css/bootstrap.min.css";
import "./components/css/slicknav.min.css";
import "./components/css/icofont.css";
import "./components/css/font-awesome.min.css";
import "./components/css/responsive.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setUserDetails = this.setUserDetails.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      user_details: '',
      token: '',
      userName: '',
      station: '',
      station_id: ''
    };
  }
  componentDidMount() {
    
  }
  setUserDetails(details) {
    console.log(details, 'the details')
    this.setState({token: details.token});
    this.setState({userName: details.userName});
    this.setState({station_id: details.station_id});
    this.setState({station: details.station})
  }
  logout() {
    this.setState({token: ''});
    
  }
  render() {
    console.log(this.state)
    return (
      
      <Router>
        <nav>
          <Link to='/signup'> Sign Up </Link>
          <Link to='/signin'> Sign In </Link>
          <button onClick={this.logout}> Sign Out </button>
        </nav>        

          <Switch >
            <Route path={'/signup'}>
              <SignUp setUser={this.setUserDetails} />
            </Route>
            <Route path={'/signin'}>
              <SignIn setUser={this.setUserDetails} />
            </Route>
            <Route path={'/dashboard'}>
              <Dashboard token={this.state.token} station_id={this.state.station_id} station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>

          </Switch>
          <Footer />        
      </Router>
    );
  }
}

export default App;
