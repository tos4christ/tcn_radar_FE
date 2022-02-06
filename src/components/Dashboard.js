
import React from 'react';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import Hourly33kv from './util_hourly/HourlyTable-33kv/HourlyTable';
import Hourly132kv from './util_hourly/HourlyTable-132kv/HourlyTable';
import Hourly330kv from './util_hourly/HourlyTable-330kv/HourlyTable';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.getEquipment = this.getEquipment.bind(this);
    this.state = {
      station: '',
      station_id: '',
      feeders: [],
      transformers: [],
      lines: [],
      reactor: [],
      token: ''
    };
  }
  componentDidMount() {
   this.setState(prevState => {
     const station = this.props.location.state.data.data.station;
     const station_id = this.props.location.state.data.data.station_id;
     const token = this.props.location.state.data.data.token;
     prevState.station = station;
     prevState.station_id = station_id;
     prevState.token = token;
     return {station: prevState.station, station_id: prevState.station_id, token: prevState.token}
   })
  }
  getEquipment() {

  }
  render() {
    console.log(this.state, 'the location')
    return (
      <div>
        <div className="App">
          <h1>TCN RADAR DATABASE REPOSITORY AND DATA PROCESSING APPLICATION</h1>
          <nav>
            <Link to={`${this.props.match.url}/hourly-33kv`}> HOURLY 33KV FEEDERS </Link>
            <Link to={`${this.props.match.url}/hourly-132kv`}> HOURLY 132KV FEEDERS </Link>
            <Link to={`${this.props.match.url}/hourly-330kv`}> HOURLY 330KV FEEDERS </Link>
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
