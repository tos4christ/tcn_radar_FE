import React from 'react';
import HourlyTableData from './HourlyTableData';

class HourlyTableBody extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      myArray: {}
    }
  }

  render() {
    const date = new Date();
    const tableDataArray = [];
    for (let i=1; i < 25; i++) {
      tableDataArray.push(<HourlyTableData count={i} feeder_name={this.props.feeder_name} onChange={this.onChange} key={i} id={`${this.props.feeder_name.toLowerCase()}-${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}-0${i}`} />)
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

export default HourlyTableBody;
