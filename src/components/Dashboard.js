
import React from 'react';
import {Link, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Hourly33kv from './util_hourly/HourlyTable-33kv/HourlyTable';
import Hourly132kv from './util_hourly/HourlyTable-132kv/HourlyTable';
import Hourly330kv from './util_hourly/HourlyTable-330kv/HourlyTable';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logout =  this.logout.bind(this);
    this.state = {
      station: localStorage.getItem("station"),
      station_id: '',
      feeders: [],
      transformers: [],
      lines: [],
      reactor: [],
      token: '',
      userName: ''
    };
  }
  componentDidMount() {
    this.props.register();
  }
  logout() {
    this.setState(prevState => {
      prevState.token = '';
      return {token: prevState.token}
    });
    this.props.history.push('/signin')
  }
  render() {
    return (
      <div>
        <button style={{'margin' : '20px'}} onClick={this.logout}> Sign Out </button>
        <div className="App">
          <h1>TCN RADAR DATABASE REPOSITORY AND DATA PROCESSING APPLICATION</h1>
          <nav>
            <Link to={`${this.props.match.url}/hourly-33kv`}> HOURLY 33KV FEEDERS </Link>
            <Link to={`${this.props.match.url}/hourly-132kv`}> HOURLY 132KV FEEDERS </Link>
            <Link to={`${this.props.match.url}/hourly-330kv`}> HOURLY 330KV FEEDERS </Link>            
          </nav>
          <Switch >
            <Route path={`${this.props.match.path}/hourly-33kv`}>
              <Hourly33kv station_id={this.state.station_id} station={this.state.station} feeders={this.state.feeders} />
            </Route>
            <Route path={`${this.props.match.path}/hourly-132kv`}>
              <Hourly132kv station_id={this.state.station_id} station={this.state.station} transformers={this.state.transformers} lines={this.state.lines} reactors={this.state.reactor} />
            </Route>
            <Route path={`${this.props.match.path}/hourly-330kv`}>
              <Hourly330kv station_id={this.state.station_id} station={this.state.station} transformers={this.state.transformers} lines={this.state.lines} reactors={this.state.reactor} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
