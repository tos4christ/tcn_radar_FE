import React from 'react';
import { withRouter } from 'react-router-dom';
import PowerTable from '../table/Table';

class Power extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {
      date: '',
      feeder_link: localStorage.getItem("feeder_link")
    }
  }
  render() {    
    return (
      <PowerTable feeder_link={this.props.feeders} type={this.props.type} station={this.props.station} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Power);
