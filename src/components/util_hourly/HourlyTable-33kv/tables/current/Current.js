import React from 'react';
import CurrentTable from './Table';

class Current extends React.Component {

  render() {    
    return (
      <CurrentTable type='Current' station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default Current;
