import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/tables.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.addFeeder = this.addFeeder.bind(this);
    this.state = {
      feeders_name: []
    }
  }
  addFeeder(event) {
    const name = event.target.textContent;

    this.setState(prevState => {
      if (prevState.feeders_name.includes(name)) {
        return;
      }
      const feeders_name = prevState.feeders_name;
      feeders_name.push(name);
      return {feeders_name: feeders_name};
    })
  }
  removeFeeder(event) {

  }

  render() {
    return (
      <div>
        <button onClick={this.addFeeder}>Elegushi</button>
        <button onClick={this.addFeeder}>Maroko</button>
        <button onClick={this.addFeeder}>Lekki</button>
        <button onClick={this.addFeeder}>Oniru</button>
        <button onClick={this.addFeeder}>21st Cen</button>
        <button onClick={this.addFeeder}>Waterfront</button>
        <button onClick={this.addFeeder}>Igbo Efon</button>
        <button onClick={this.addFeeder}>Agungi</button>
        <table className="tg">
          <TableHeader />
          <TableBody feeders_name={this.state.feeders_name}/>
        </table>
      </div>
    )
  }
}

export default withRouter(Table);
