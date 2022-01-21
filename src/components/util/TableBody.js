import React from 'react';
import { withRouter } from 'react-router-dom';
import TableRow from './TableRow';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeders_name: 'test'
    }
  }

  render() {

    return (
      <tbody>
        {
          this.props.feeders_name.map(feeder_name => <TableRow feeder_name={feeder_name} key={feeder_name} /> )
        }
      </tbody>
    )
  }
}

export default withRouter(TableBody);
