import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import HourlyTableData from './HourlyTableData';

class HourlyTableRow extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      myArray: {}
    }
  }

  render() {
    // props == count, feeder_name, onChange, key, id
    const tableDataArray = [];
    for (let i=1; i < 25; i++) {
      tableDataArray.push(<HourlyTableData item={this.props.item} type={this.props.type} date={this.props.date} station={this.props.station} count={i} feeder_name={this.props.feeder_name} onChange={this.onChange} key={i} id={`${this.props.feeder_name.toLowerCase()}-${this.props.date}-0${i}`} />)
    };
    return (
      <tr>
        <td className="tg-e7p8">{this.props.feeder_name}</td>
        {
          tableDataArray
        }
      </tr>
    )
  }
}

export default HourlyTableRow;
