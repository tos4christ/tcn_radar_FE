import React from 'react';
import { withRouter } from 'react-router-dom';
import VoltageTable from '../table/Table';

class Voltage extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {
      date: '',
      feeder_link: localStorage.getItem("feeder_link")
    }
  }  
  render() {    
    return (
      <VoltageTable feeder_link={this.props.feeders} type={this.props.type} station={this.props.station} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Voltage);
