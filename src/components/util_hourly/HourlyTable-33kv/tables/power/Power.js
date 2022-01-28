import React from 'react';
import { withRouter } from 'react-router-dom';
import PowerTable from '../table/Table';

class Power extends React.Component {

  render() {    
    return (
      <PowerTable item={this.props.item} type={this.props.type} station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Power);
