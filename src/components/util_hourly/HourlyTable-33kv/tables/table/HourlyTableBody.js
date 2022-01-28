import React from 'react';
import { withRouter } from 'react-router-dom';
import HourlyTableRow from './HourlyTableRow';

class HourlyTableBody extends React.Component {
  constructor(props) {
    super(props);
    this.checkKey = this.checkKey.bind(this);
    this.move = this.move.bind(this);
  }
  componentDidMount() {
    document.onkeydown = this.checkKey;
  }
  checkKey(e) {    
    e = e || window.event;
    this.start = e.target;
    this.start.focus();
    if(e.keyCode === 38) {
      // up arrow
      let idx = this.start.cellIndex;
      let nextRow = this.start.parentElement.previousElementSibling;
      if (nextRow != null) {
        let sibling = nextRow.cells[idx];
        this.move(sibling, this.start)
      }
    } else if (e.keyCode === 40) {
      // down arrow
      let idx = this.start.cellIndex;
      let nextRow = this.start.parentElement.nextElementSibling;
      if (nextRow != null) {
        let sibling = nextRow.cells[idx];
        this.move(sibling, this.start)
      }
    } else if (e.keyCode === 37) {
      // left arrow
      let sibling = this.start.previousElementSibling;
      this.move(sibling, this.start);
    } else if (e.keyCode === 39) {
      // right arrow
      let sibling = this.start.nextElementSibling;
      this.move(sibling, this.start);
    }
    return;
  }  
  move(sibling, start) {
    // let start = this.state.start;
    if (sibling != null) {
      start.focus();      
      sibling.focus();    
      this.start = sibling;
    }
  }

  render() {
    // props == feeder_name, key, station
    return (
      <tbody ref={node => this.tbody = node} id="table-body">
        {
          this.props.feeders_name.map((feeder_name, i) => {
            return <HourlyTableRow item={this.props.item} type={this.props.type} date={this.props.date} feeder_name={feeder_name} station={this.props.station} key={feeder_name} />
          })
        }
      </tbody>
    )
  }
}

export default withRouter(HourlyTableBody);
