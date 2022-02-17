
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
    this.register = this.register.bind(this);
    this.getLines = this.getLines.bind(this);
    this.state = {
      user_details: '',
      token: '',
      userName: '',
      station: '',
      station_id: '',
      feeders: '',
      lines_132: '',
      lines_330: '',
      reactors_132: '',
      reactors_330: '',
      txfrs_132: '',
      txfrs_330: '',
      display: 'block'
    };
  }
  componentDidMount() {
    
  }
  setUserDetails() {
    const station = localStorage.getItem("station");
    const station_id = localStorage.getItem("station_id");
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    const feeders = localStorage.getItem("feeders");
    const txfrs_132 = localStorage.getItem("txfrs_132");
    const txfrs_330 = localStorage.getItem("txfrs_330");
    const lines_132 = localStorage.getItem("lines_132");
    const lines_330 = localStorage.getItem("lines_330");
    const reactors_132 = localStorage.getItem("reactors_132");
    const reactors_330 = localStorage.getItem("reactors_330");
    // Set the state
    this.setState({token: token});
    this.setState({userName: userName});
    this.setState({station_id: station_id});
    this.setState({station: station});
    this.setState({feeders: feeders});
    this.setState({txfrs_132: txfrs_132});
    this.setState({txfrs_330: txfrs_330});
    this.setState({lines_132: lines_132});
    this.setState({lines_330: lines_330});
    this.setState({reactors_132: reactors_132});
    this.setState({reactors_330: reactors_330});

  }
  getLines() {

  }
  register() {
    this.setState({display : 'none'});
  }
  render() {
    return (      
      <Router>
        <nav style={{'display': this.state.display}}>
          <Link to='/signup'> Sign Up </Link>
          <Link to='/signin'> Sign In </Link>
        </nav>        
          <Switch >
            <Route path={'/signup'}>
              <SignUp />
            </Route>
            <Route path={'/signin'}>
              <SignIn setUser={this.setUserDetails} />
            </Route>
            <Route path={'/dashboard'}>
              <Dashboard register={this.register} token={this.state.token} station_id={this.state.station_id} station={this.state.station} feeders={this.state.feeders} transformers={this.state.txfrs} lines={this.state.lines} reactors={this.state.reactors} />
            </Route>
          </Switch>
          <Footer />        
      </Router>
    );
  }
}

export default App;
