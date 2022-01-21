import React from 'react';
import {withRouter} from 'react-router';

class Readings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male'
    }
  }

  componentDidMount() {

  }

  fetchApparatus(app) {

  }

  render() {

    return (
      <div className="container-fluid">

      </div>
    )
  }
}

export default withRouter(Readings);
