import React from 'react';
import { withRouter } from 'react-router-dom';
import TapTable from '../../table/Table';

class Tap extends React.Component {

  render() {    
    return (
      <TapTable type='Tap' station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Tap);
