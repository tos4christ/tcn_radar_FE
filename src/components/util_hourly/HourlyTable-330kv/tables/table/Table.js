import React from 'react';
import { withRouter } from 'react-router-dom';
import HourlyTableHeader from './HourlyTableHeader';
import HourlyTableBody from './HourlyTableBody';

class Table extends React.Component {
  constructor(props) {    
    super(props);
    this.setDate = this.setDate.bind(this);
    this.state = {
      date: ''
    }
  }
  
  componentDidMount() {
    var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const newDate = new Date().toLocaleString("en-GB", options).split('/').reverse().join('-');
    this.setState(prevState => {
      prevState.date = newDate
      return {date: prevState.date}
    })    
  }

  setDate() {
    this.setState(prevState => {
      prevState.date =  this.selectedDate.value;
      return {date: prevState.date};
    })
  }

  render() {    
    return (
      // props == type, feeders_name, station
        <div>
        {/* Select a date to usein getting the data */}
        <input className='date-input' type={'date'} onChange={this.setDate} ref={node => this.selectedDate = node } defaultValue={this.state.date} ></input>
        <div className="block-display">
        {this.props.feeder_link.map( (feeder, i) => {
            return <button onClick={this.props.flipFeeder} key={i}>{feeder}</button>
        })}            
        </div>
        <table className="tg">
            <HourlyTableHeader type={this.props.type} />
            <HourlyTableBody date={this.state.date} type={this.props.type} feeders_name={this.props.feeders} station={this.props.station}/>
        </table>
        </div>     
    )
  }
}

export default withRouter(Table);
