import React from 'react';

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Table'
    }
  }

  render() {

    return (

      <td className="tg-e7p8" ><input onChange={this.props.onChange} id={this.props.id} /></td>

    )
  }
}

export default TableData;
