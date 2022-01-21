import React from 'react';
import {withRouter} from 'react-router';

class Sidemenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male'
    }
  }

  render() {

    return (
      <div className="container-fluid">

      <ul>
        <li>Reports</li>
        <li>Hourly Readings</li>
        <li>Daily Readings</li>
        <li>Profile</li>
      </ul>

      </div>
    )
  }
}

export default withRouter(Sidemenu);
