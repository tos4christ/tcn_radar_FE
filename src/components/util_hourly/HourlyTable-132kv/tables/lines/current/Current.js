import React from 'react';
import { withRouter } from 'react-router-dom';
import CurrentTable from '../../table/Table';

class Current extends React.Component {

  render() {    
    return (
        // props === type, station, feeder_link, feeders, flipFeeder
      <CurrentTable type='Current' station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Current);
