import React from 'react';
import { withRouter, Link, Switch, Route } from 'react-router-dom';

class NCC extends React.Component {
  constructor(props) {
    super(props);
    this.getStationLineLoads = this.getStationLineLoads.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {      
      date: undefined,
      data: ''
    }
  }
  componentDidMount() {
    var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const newDate = new Date().toLocaleDateString("en-GB", options).split('/').reverse().join('-');
    this.setState(prevState => {
      prevState.date = newDate
      return {date: prevState.date}
    })
    // Hide all the tabcontents and remove the active class from their links
    this._isMounted = true;
    this._isMounted && this.getStationLineLoads();    
  }
  componentWillUnmount() {
      this._isMounted = false;
  }
  setDate() {
    this.setState(prevState => {
      prevState.date =  this.selectedDate.value;
      return {date: prevState.date};
    });
    this.getStationLineLoads()
  }
  getStationLineLoads() {
    var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = (this.selectedDate.value).length > 0 ? this.selectedDate.value : new Date().toLocaleDateString("en-GB", options).split('/').reverse().join('-');
      const url = `/sll?date=${date}`;
      fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(res => {
          this.setState({data: res.data});
      });
  }
  
  render() {
      const data = typeof this.state.data === 'object' ? this.state.data : null;
      const tableRow = []
      if (data) {
        const stations = Object.keys(data);

        // Iterate through each station to iterate over their equipment
        stations.forEach((station, stationIndex) => {
            const tr = [];
            // Get all the lines for each station, stored in the keys of each station object
            const lines = Object.keys(data[station]);
            // Iterate through each lines and for each line get the line load stored in its array key pair
            lines.forEach((line, lineIndex) => {
              // initialize the tabledata array to store the data temporarily
              const tdl = [];
              // push the station name and the equipment name to the beginning of the array
              // here you can play with the rowspan to put each station and equipment name to span the row it contains
              tdl.push(<td style={{border: '2px solid brown', padding: '2px', width: '10px', height: '10px'}} key={`b${lineIndex}`}>{station}</td>)
              tdl.push(<td style={{border: '2px solid brown', padding: '2px', width: '10px', height: '10px'}} key={`c${lineIndex}`}>{line}</td>);
              // get the line data stored as an array in the key of each line   
              const lineData = data[station][line];
              // iterate through the line data and push it into the table-data array where the station and line name is already existing
              lineData.forEach((tdd, index) => {
                  tdl.push(<td style={{border: '2px solid brown', padding: '2px', width: '10px', height: '10px'}} key={`a${index}`}>{tdd.mw}</td>)
              });
              // get the maximum of the line data and hour
              let  max = 0, maxMw, objectKeys = Object.keys(lineData);
              for (let i = 0; i < objectKeys.length; i++) {
                  if (lineData[i].mw > max) {
                      max = lineData[i].mw;
                      maxMw = lineData[i];
                  }
              }
              console.log(maxMw)
              tr.push(<tr key={`d${stationIndex}-${lineIndex}`}>{tdl}</tr>)
            })
            tableRow.push(tr);
        })
      }
    return (
      <div>
        {/* Select a date to usein getting the data */}
        <input className='date-input' type={'date'} onChange={this.setDate} ref={node => this.selectedDate = node } defaultValue={this.state.date} ></input>
          <table >
              <thead></thead>
              <tbody>
                {tableRow}
              </tbody>
          </table>
        
      </div>
    )
  }
}

export default withRouter(NCC);
