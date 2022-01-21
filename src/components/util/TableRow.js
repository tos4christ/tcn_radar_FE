import React from 'react';
import TableData from './TableData';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      myArray: {}
    }
  }

  persistReadings() {

  }

  fetchReadings() {

  }

  // OnChange save it in state and push it to the server for real time communication
  async onChange(event) {
    const fdr_hr_id = event.target.id;
    const fd_hr_val = event.target.value;
    await this.setState(prevState => {
      if ( !prevState.myArray[this.props.feeder_name] ) {
        prevState.myArray[this.props.feeder_name] = {};
      }
      prevState.myArray[this.props.feeder_name][fdr_hr_id] = fd_hr_val;
      console.log(prevState, 'the prevstate');
      return {myArray: prevState.myArray};
    });

  }

  render() {
    const tableDataArray = [];
    for (let i=1; i < 25; i++) {
      tableDataArray.push(<TableData onChange={this.onChange.bind(this)} key={i} id={`${this.props.feeder_name}-${i}`} />)
    };

    return (
      <tr>
        <td className="tg-e7p8"> {this.props.feeder_name} </td>
        {
          tableDataArray
        }
      </tr>
    )
  }
}

export default TableBody;
