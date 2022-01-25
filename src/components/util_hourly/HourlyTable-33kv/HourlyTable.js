import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileRow from './profile/profileRow';
import Reports from './reports/Reports';
import Table from './tables/Table';

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
      <h> 33kv panel</h>
        <div className="tab-panel">
          <div className="tab">
            <button className="tablinks" onClick={e => this.openCity(e, 'reports')}><b>33kv Report upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'daily')}><b>33kv Current upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'profile')}><b>33kv Profile download</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'profile')}><b>33kv Voltage upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'profile')}><b>33kv Power Upload</b></button>
            <button className="tablinks" onClick={e => this.openCity(e, 'profile')}><b>33kv Outage request upload</b></button>
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

          {/* Hourly inputs */}
          <div id="daily" className="tabcontent">
            <Table flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
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
        </div>
        <br />        
      </div>
    )
  }
}

export default withRouter(HourlyTable);
