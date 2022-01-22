
import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HourlyTable from './components/util_hourly/HourlyTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getEquipment = this.getEquipment.bind(this);
    this.state = {
      
    };
  }
  getEquipment() {

  }
  render() {
    return (
      <Router>
        <div className="App">

          <h1> This is the hourly input strategy</h1>

          <Header />

          <HourlyTable />

          <Switch >

          </Switch>
          <Footer />
        </div>



      </Router>
    );
  }
}

export default App;
