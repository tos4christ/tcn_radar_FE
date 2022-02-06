
import React from 'react';
import {Link, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Hourly33kv from './util_hourly/HourlyTable-33kv/HourlyTable';
import Hourly132kv from './util_hourly/HourlyTable-132kv/HourlyTable';
import Hourly330kv from './util_hourly/HourlyTable-330kv/HourlyTable';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.getEquipment = this.getEquipment.bind(this);
    this.logout =  this.logout.bind(this);
    this.state = {
      station: '',
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
    this._isMounted = true;
    this._isMounted && this.setState(prevState => {
    const station = localStorage.getItem("station");
    const station_id = localStorage.getItem("station_id");
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
      prevState.station = station;
      prevState.station_id = station_id;
      prevState.token = token;
      prevState.userName = userName;
      return {station: prevState.station, station_id: prevState.station_id, token: prevState.token, userName: prevState.userName}
    })
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getEquipment() {

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
        <div className="App">
          <h1>TCN RADAR DATABASE REPOSITORY AND DATA PROCESSING APPLICATION</h1>
          <nav>
            <Link to={`${this.props.match.url}/hourly-33kv`}> HOURLY 33KV FEEDERS </Link>
            <Link to={`${this.props.match.url}/hourly-132kv`}> HOURLY 132KV FEEDERS </Link>
            <Link to={`${this.props.match.url}/hourly-330kv`}> HOURLY 330KV FEEDERS </Link>
            <button onClick={this.logout}> Sign Out </button>
          </nav>

          <Switch >
            <Route path={`${this.props.match.path}/hourly-33kv`}>
              <Hourly33kv station_id={this.state.station_id} station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>
            <Route path={`${this.props.match.path}/hourly-132kv`}>
              <Hourly132kv station_id={this.state.station_id} station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>
            <Route path={`${this.props.match.path}/hourly-330kv`}>
              <Hourly330kv station_id={this.state.station_id} station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>

          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
