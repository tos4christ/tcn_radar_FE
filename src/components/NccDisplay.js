// import React from 'react';
// import { withRouter, Link, Switch, Route } from 'react-router-dom';
// import ProfileRow from './profile/profileRow';
// import Reports from './reports/Reports';
// import CurrentTable from './tables/current/Current';
// import VoltageTable from './tables/voltage/Voltage';
// import PowerTable from './tables/power/Power';

// class HourlyTable extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
      
//       item: ''
//     }
//   }
//   componentDidMount() {
//     // Hide all the tabcontents and remove the active class from their links
    
//   }
  
// // Create functions to pull data for each display needed for NCC to see all station data
// // Ensure to use setTimeInterval to make the functions keep updating and fetching records every hour

//   render() {
//     return (
//       <div>
//       <h1> 33kv panel</h1>
//       <nav>
//             <Link to={`${this.props.match.url}/current`}> 33kv Current upload </Link>
//             <Link to={`${this.props.match.url}/voltage`}> 33kv Voltage upload </Link>
//             <Link to={`${this.props.match.url}/power`}> 33kv Power Upload </Link>
//             <Link to={`${this.props.match.url}/profile`}> 33kv Profile download </Link>
//             <Link to={`${this.props.match.url}/reports`}> 33kv Report upload </Link>
//             <Link to={`${this.props.match.url}/outages`}> 33kv Outage request upload </Link>
//       </nav>              
    
//       <Switch>
//         <Route path={`${this.props.match.path}/current`}>
//           {/* Hourly Current inputs */}
//           <div id="current" className="tabcontent">
//             <CurrentTable item={this.state.item} type='feeder_current' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} /> 
//           </div>
//         </Route>
//         <Route path={`${this.props.match.path}/voltage`}>
//           {/* Hourly Voltage inputs */}
//           <div id="voltage" className="tabcontent">
//             <VoltageTable item={this.state.item} type='feeder_voltage' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
//           </div>
//         </Route>
//         <Route path={`${this.props.match.path}/power`}>
//           {/* Hourly Power inputs */}
//           <div id="power" className="tabcontent">
//             <PowerTable item={this.state.item} type='feeder_power' station={this.props.station} flipFeeder={this.flipFeeder} feeder_link={this.state.report_feeders} feeders_name={this.state.feeders_name} />                        
//           </div>
//         </Route>
//         <Route path={`${this.props.match.path}/profile`}>
//           {/* Profile */}
//           <div id="profile" className="tabcontent">
//             <div className="profile-div">
//               <button onClick={this.printProfile}>
//                 Print Feeder Profile
//               </button>
//               <table className="tg">
//                 <thead>
//                   <tr>
//                     <th className="tg-zb4j">FEEDER</th>
//                     <th className="tg-zb4j">Max Amps</th>
//                     <th className="tg-zb4j">Max Time</th>                    
//                   </tr>                
//                 </thead>
//                 <tbody>            
//                   {this.state.profileRow}
//                 </tbody>
//               </table>
//             </div>
//             <div className="sla-div">

//             </div>
//           </div>
//         </Route>
//         <Route path={`${this.props.match.path}/reports`}>
//           {/* Reports */}
//           <div id="reports" className="tabcontent">
//             <h3 className='mb-0 mt-0'> Reports </h3>
//             <section className="no-style">              
//               <div className="sub-10">                                   
//                 {this.state.report_feeders.map( (feeder, i) => {
//                   return (
//                     <div key={i} className="li-content">
//                       <div className="feeder-label" >
//                         <label onClick={this.feederReport} >{feeder}</label>
//                       </div>
//                     </div>
//                   )
//                 })}                    
//               </div>
//               <div className='sub-90'>
//                   <Reports feeder={this.state.reportFeeder}/>
//               </div> 
//             </section>            
//           </div>
//         </Route>
//         <Route path={`${this.props.match.path}/outages`}>
//           {/* Outage request */}
//           <div id="outages" className="tabcontent">
//             <h3 className='mb-0 mt-0'> Reports </h3>
//             <section className="no-style">              
//               <div className="sub-10">                                   
//                 {this.state.report_feeders.map( (feeder, i) => {
//                   return (
//                     <div key={i} className="li-content">
//                       <div className="feeder-label" >
//                         <label onClick={this.feederReport} >{feeder}</label>
//                       </div>
//                     </div>
//                   )
//                 })}                    
//               </div>
//               <div className='sub-90'>
//                   <Reports feeder={this.state.reportFeeder}/>
//               </div> 
//             </section>            
//           </div>
//         </Route>
//       </Switch>        
        
//       </div>
//     )
//   }
// }

// export default withRouter(HourlyTable);
