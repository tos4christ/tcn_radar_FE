import React from 'react';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
import ProfileRow from './profile/profileRow';
import Reports from './reports/Reports';
import LineCurrentTable from './tables/lines/current/Current';
import LineVoltageTable from './tables/lines/voltage/Voltage';
import LinePowerTable from './tables/lines/power/Power';
import TxCurrentTable from './tables/transformers/current/Current';
import TxVoltageTable from './tables/transformers/voltage/Voltage';
import TxPowerTable from './tables/transformers/power/Power';
import TxMxTable from './tables/transformers/mx/TxfrMx';
import TxTapTable from './tables/transformers/tap_position/Tap';
import MxTable from './tables/reactor/mx/Mx';

class HourlyTable extends React.Component {
  constructor(props) {
    super(props);
    this.addFeeder = this.addFeeder.bind(this);
    this.printProfile = this.printProfile.bind(this);
    this.feederReport = this.feederReport.bind(this);
    this.flipFeeder = this.flipFeeder.bind(this);
    this.state = {
        reactors : localStorage.getItem("reactors_132"),
        transformers: localStorage.getItem("txfrs_132"),
        lines: localStorage.getItem("lines_132"),
      profileRow: [],
      reportFeeder: '',
      flipFeeder: true,
      feeders_name: []
    }
  }  
  flipFeeder(event) {
    const showFeeder = this.state.flipFeeder ? true : false;
    if (showFeeder) {
      this.addFeeder(event);
      this.setState({flipFeeder : false});
    } else {
      this.removeFeeder(event)
      this.setState({flipFeeder : true})
    }
  }
  addFeeder(event) {
    // store the text content of the feeder in variable name
    const name = event.target.textContent;
    // add the feeder's name to the array containing feeder names if its not in the array
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
    // store the text content of the feeder in variable name
    const name = event.target.textContent;
    // remove the feeder's name from the array containing feeder names
    this.setState(prevState => {
      const feeders_name = prevState.feeders_name.filter( feeder => name !== feeder);
      return {feeders_name: feeders_name};
    })
  }  
  printProfile() {
    const check = this.state.profileRow.length > 0 ? false :true;
    if(check) {
      this.setState(prevState => {
        prevState.profileRow = this.state.feeders_name.map( feeder => <ProfileRow key={feeder} feeder_name={feeder} /> );
        return {profileRow : prevState.profileRow} 
      })
    } else this.setState({profileRow: []});    
  }
  feederReport(e) {
    e.preventDefault();
    this.setState(prevState => {
      prevState.reportFeeder = e.target.innerText;
      return {reportFeeder: prevState.reportFeeder}
    })
  }
  render() {
    const reactors = this.state.reactors.split(',');
    const txfrs = this.state.transformers.split(',');
    const lines = this.state.lines.split(',');
    return (
      <div>
        <h1> 132kv panel</h1>       
        <nav className='flex-container'>
          <Link to={`${this.props.match.url}/linecurrent`}> Line Current </Link>
          <Link to={`${this.props.match.url}/linevoltage`}> Line Voltage </Link>
          <Link to={`${this.props.match.url}/linepower`}> Line Power </Link>        
          <Link to={`${this.props.match.url}/txfrcurrent`}> Transformer Current </Link>
          <Link to={`${this.props.match.url}/txfrvoltage`}> Transformer Voltage </Link>
          <Link to={`${this.props.match.url}/txfrpower`}> Transformer Power </Link>
          <Link to={`${this.props.match.url}/txfrmx`}> Transformer MX </Link>
          <Link to={`${this.props.match.url}/txfrtap`}> Transformer Tap </Link>        
          <Link to={`${this.props.match.url}/reactor`}> Reactor MX </Link>        
          <Link to={`${this.props.match.url}/profile`}> Profile </Link>
          <Link to={`${this.props.match.url}/reports`}> Report </Link>
          <Link to={`${this.props.match.url}/outages`}> Outage request </Link>
        </nav>
        <Switch>        
          <Route path={`${this.props.match.path}/linecurrent`}>
            {/* Hourly Line Current inputs */}
            <div id="linecurrent" className="tabcontent">
              <LineCurrentTable type='line_current' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={lines} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/linevoltage`}>
            {/* Hourly Line Voltage inputs */}
            <div id="linevoltage" className="tabcontent">
              <LineVoltageTable type='line_voltage' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={lines} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/linepower`}>
            {/* Hourly Line Power inputs */}
            <div id="linepower" className="tabcontent">
              <LinePowerTable type='line_power' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={lines} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/txfrcurrent`}>
            {/* Hourly Transformer current inputs */}
            <div id="txfrcurrent" className="tabcontent">
              <TxCurrentTable type='txfr_current' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={txfrs} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/txfrvoltage`}>
            {/* Hourly Transformer voltage inputs */}
            <div id="txfrvoltage" className="tabcontent">
              <TxVoltageTable type='txfr_voltage' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={txfrs} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/txfrpower`}>
            {/* Hourly Transformer power inputs */}
            <div id="txfrpower" className="tabcontent">
              <TxPowerTable type='txfr_power' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={txfrs} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/txfrmx`}>
            {/* Hourly Transformer power inputs */}
            <div id="txfrmx" className="tabcontent">
              <TxMxTable type='txfr_mx' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={txfrs} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/txfrtap`}>
            {/* Hourly Transformer tap inputs */}
            <div id="txfrtap" className="tabcontent">
              <TxTapTable type='txfr_tap' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={txfrs} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/reactor`}>
            {/* Hourly Reactor Mx inputs */}
            <div id="reactor" className="tabcontent">
              <MxTable type='reactor_mx' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={reactors} feeders_name={this.state.feeders_name} />                        
            </div>
          </Route>
          <Route path={`${this.props.match.path}/profile`}>
            {/* Profile */}
            <div id="profile" className="tabcontent">
              <div className="profile-div">
                <button onClick={this.printProfile}>
                  Print Feeder Profile
                </button>
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-zb4j">FEEDER</th>
                      <th className="tg-zb4j">Max Amps</th>
                      <th className="tg-zb4j">Max Time</th>                    
                    </tr>                
                  </thead>
                  <tbody>            
                    {this.state.profileRow}
                  </tbody>
                </table>
              </div>
              <div className="sla-div">

              </div>
            </div>
          </Route>
          <Route path={`${this.props.match.path}/reports`}>
            {/* Reports */}
            <div id="reports" className="tabcontent">
              <h3 className='mb-0 mt-0'> Reports </h3>
              <section className="no-style">              
                <div className="sub-10">                                   
                  {lines.map( (feeder, i) => {
                    return (
                      <div key={i} className="li-content">
                        <div className="feeder-label" >
                          <label onClick={this.feederReport} >{feeder}</label>
                        </div>
                      </div>
                    )
                  })}                    
                </div>
                <div className='sub-90'>
                    <Reports feeder={this.state.reportFeeder}/>
                </div> 
              </section>            
            </div>
          </Route>
          <Route path={`${this.props.match.path}/outages`}>
            {/* Outages */}
            <div id="outages" className="tabcontent">
              <h3 className='mb-0 mt-0'> Reports </h3>
              <section className="no-style">              
                <div className="sub-10">                                   
                  {lines.map( (feeder, i) => {
                    return (
                      <div key={i} className="li-content">
                        <div className="feeder-label" >
                          <label onClick={this.feederReport} >{feeder}</label>
                        </div>
                      </div>
                    )
                  })}                    
                </div>
                <div className='sub-90'>
                    <Reports feeder={this.state.reportFeeder}/>
                </div> 
              </section>            
            </div>
          </Route>        
        </Switch>
      </div>
    )
  }
}

export default withRouter(HourlyTable);
