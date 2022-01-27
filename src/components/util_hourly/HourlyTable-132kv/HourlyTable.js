import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileRow from './profile/profileRow';
import Reports from './reports/Reports';
import LineCurrentTable from './tables/lines/current/Current';
import LineVoltageTable from './tables/lines/voltage/Voltage';
import LinePowerTable from './tables/lines/power/Power';
import TxCurrentTable from './tables/transformers/current/Current';
import TxVoltageTable from './tables/transformers/voltage/Voltage';
import TxPowerTable from './tables/transformers/power/Power';
import TxTapTable from './tables/transformers/tap_position/Tap';
import MxTable from './tables/reactor/mx/Mx';

class HourlyTable extends React.Component {
  constructor(props) {
    super(props);
    this.addFeeder = this.addFeeder.bind(this);
    this.openCity = this.openCity.bind(this);
    this.setTabs = this.setTabs.bind(this);
    this.printProfile = this.printProfile.bind(this);
    this.feederReport = this.feederReport.bind(this);
    this.flipFeeder = this.flipFeeder.bind(this);
    this.state = {
      feeders_name: [],
      report_feeders : ['Lekki', 'Elegushi', 'Waterfront', 'Agungi','Maroko', '21st Cent', 'Igbo Efon', 'Oniru'],
      profileRow: [],
      reportFeeder: '',
      flipFeeder: true
    }
  }
  componentDidMount() {
    // Hide all the tabcontents and remove the active class from their links
    this.setTabs();
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
  setTabs() {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }   
  }
  // OPEN CITY FUNCTION
  openCity(event, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
  }
  printProfile() {
    const check = this.state.profileRow.length > 0 ? false :true;
    if(check) {
      this.setState(prevState => {
        prevState.profileRow = this.state.feeders_name.map( feeder => <ProfileRow key={feeder} feeder_name={feeder} /> );
        return {profileRow : prevState.profileRow} 
      })
    } else this.setState({profileRow: []})
    
  }
  feederReport(e) {
    e.preventDefault();
    this.setState(prevState => {
      prevState.reportFeeder = e.target.innerText;
      return {reportFeeder: prevState.reportFeeder}
    })
  }

  render() {    
    return (
      <div>
      <h> 132kv panel</h>
        <div className="tab-panel">
          <div className="tab">            
            <button className="tablinks" onClick={e => this.openCity(e, 'linecurrent')}><b>132kv Line Current upload</b></button>            
            <button className="tablinks" onClick={e => this.openCity(e, 'linevoltage')}><b>132kv Line Voltage upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'linepower')}><b>132kv Line Power upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'txfrcurrent')}><b>132kv Transformer Current upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'txfrvoltage')}><b>132kv Transformer Voltage upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'txfrpower')}><b>132kv Transformer Power upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'txfrtap')}><b>132kv Transformer Tap position upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'reactor')}><b>132kv Reactor Mx upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'profile')}><b>132kv Line/Txfr Profile download</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'reports')}><b>132kv Lines/Txfr Report upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'outages')}><b>132kv Line/Txfr Outage request upload</b></button>            
          </div>          

          {/* Hourly Line Current inputs */}
          <div id="linecurrent" className="tabcontent">
            <LineCurrentTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Line Voltage inputs */}
          <div id="linevoltage" className="tabcontent">
            <LineVoltageTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Line Power inputs */}
          <div id="linepower" className="tabcontent">
            <LinePowerTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Transformer current inputs */}
          <div id="txfrcurrent" className="tabcontent">
            <TxCurrentTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Transformer voltage inputs */}
          <div id="txfrvoltage" className="tabcontent">
            <TxVoltageTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Transformer power inputs */}
          <div id="txfrpower" className="tabcontent">
            <TxPowerTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Transformer tap inputs */}
          <div id="txfrtap" className="tabcontent">
            <TxTapTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

          {/* Hourly Reactor Mx inputs */}
          <div id="reactor" className="tabcontent">
            <MxTable station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
          </div>

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

          {/* Reports */}
          <div id="reports" className="tabcontent">
            <h3 className='mb-0 mt-0'> Reports </h3>
            <section className="no-style">              
              <div className="sub-10">                                   
                {this.state.report_feeders.map( (feeder, i) => {
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

          {/* Outages */}
          <div id="outages" className="tabcontent">
            <h3 className='mb-0 mt-0'> Reports </h3>
            <section className="no-style">              
              <div className="sub-10">                                   
                {this.state.report_feeders.map( (feeder, i) => {
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

        </div>
        <br />        
      </div>
    )
  }
}

export default withRouter(HourlyTable);
