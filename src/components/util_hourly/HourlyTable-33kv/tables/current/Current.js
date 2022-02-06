import React from 'react';
import { withRouter } from 'react-router-dom';
import CurrentTable from '../table/Table';

class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeders_name: [],
      report_feeders : ['Lekki', 'Elegushi', 'Waterfront', 'Agungi','Maroko', '21st Cent', 'Igbo Efon', 'Oniru'],
      profileRow: [],
      reportFeeder: '',
      flipFeeder: true,
      item: ''
    }
  }
  componentDidMount() {
    //fetch the fe
  }

  render() {
    
    return (
        // props === type, station, feeder_link, feeders, flipFeeder        
        <CurrentTable type={this.props.type} station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Current);
