import React from 'react';
import { withRouter, Link, Switch, Route } from 'react-router-dom';

class NCC extends React.Component {
  constructor(props) {
    super(props);
    this.getStationLineLoads = this.getStationLineLoads.bind(this);
    this.state = {      
      date: '',
      data: ''
    }
  }
  componentDidMount() {
    // Hide all the tabcontents and remove the active class from their links
    this._isMounted = true;
    this._isMounted && this.getStationLineLoads(this.state.date);
  }
  componentWillUnmount() {
      this._isMounted = false;
  }
  getStationLineLoads(date) {
      const url = '/sll';
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
          this.setState({data: res.data})
          // console.log(res.data, 'the response')
      });
  }
  
  render() {
      const data = typeof this.state.data === 'object' ? this.state.data : null;
      const tableRow = []
      if (data) {
        const stations = Object.keys(data);
        
        stations.forEach((station, stationIndex) => {
            const tr = [];
            const lines = Object.keys(data[station]);          
            lines.forEach((line, lineIndex) => {
                const tdl = [];
                tdl.push(<td style={{border: '2px solid brown', padding: '2px', width: '10px', height: '10px'}} key={`b${lineIndex}`}>{station}</td>)
                tdl.push(<td style={{border: '2px solid brown', padding: '2px', width: '10px', height: '10px'}} key={`c${lineIndex}`}>{line}</td>);     
                const lineData = data[station][line];
                lineData.forEach((tdd, index) => {
                    tdl.push(<td style={{border: '2px solid brown', padding: '2px', width: '10px', height: '10px'}} key={`a${index}`}>{tdd.mw}</td>)
                })
                tr.push(<tr key={`d${stationIndex}-${lineIndex}`}>{tdl}</tr>)
            })
            tableRow.push(tr);
        })
      }
    return (
      <div>   
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
