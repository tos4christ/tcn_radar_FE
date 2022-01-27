import React from 'react';
import { withRouter } from 'react-router-dom';
import MxTable from '../../table/Table';

class Mx extends React.Component {

  render() {    
    return (
      <MxTable type={this.props.type} station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Mx);
