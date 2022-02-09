// import React from 'react';

// class LinesHourly extends React.Component {
//   constructor(props) {
//     super(props); 
//     this.getLineLoad = this.getLineLoad.bind(this);
//     this.state = {
//       feederData: {}
//     }    
//   }
 
//   componentDidMount() {
//     this.getLineLoad(this.props.feeder_name);
//   }
//   getLinesLoad(feeder_name) {
//       // Get all the 330kv lines for the station supplied via the props
//       // Tabulate the line loads on a hourly basis, pairing the hour column to the hour number of the table
//     const url = `/current/profile?feeder_name=${feeder_name}`;
//     fetch(url, {
//       method: 'GET',
//       mode: 'no-cors',
//       cache: 'no-cache',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(res => {
//         return this.setState(prevState => {
//             prevState.feederData = new Object(res.res);
//             return {feederData: prevState.feederData}
//         })
//     });
//   }

//   render() {
//     return (
//         <table>
//             <tr>
//                 <td className="tg-e7p8">{this.props.feeder_name}</td>
//                 <td className="tg-e7p8">{this.state.feederData.amp ? this.state.feederData.amp : ''}</td>
//                 <td className="tg-e7p8">{this.state.feederData.hour ? this.state.feederData.hour : ''}</td>
//             </tr>
//         </table>      
//     )
//   }
// }

// export default LinesHourly;
