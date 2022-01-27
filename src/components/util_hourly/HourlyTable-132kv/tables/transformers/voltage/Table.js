import React from 'react';
import { withRouter } from 'react-router-dom';
import HourlyTableHeader from './HourlyTableHeader';
import HourlyTableBody from './HourlyTableBody';

class Table extends React.Component {
  
  componentDidMount() {
    
  }

  render() {    
    return (
        <div >
        <div className="block-display">
        {this.props.feeder_link.map( (feeder, i) => {
            return <button onClick={this.props.flipFeeder} key={i}>{feeder}</button>
        })}            
        </div>
        <table className="tg">
            <HourlyTableHeader />
            <HourlyTableBody feeders_name={this.props.feeders_name}/>
        </table>
        </div>     
    )
  }
}

export default withRouter(Table);
