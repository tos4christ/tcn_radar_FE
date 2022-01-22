import React from 'react';
import Report from './Report';

class Reports extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      status: 0,
      reports: []
    }
    this.postReport = this.postReport.bind(this);
    this.getReport = this.getReport.bind(this);
  }
  componentDidMount() {
      this.getReport()
  }
  getReport() {
    const url = `/reports`;
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
        const response = new Object(res.res);
        return this.setState(prevState => {
            prevState.reports = response;
            return {reports: prevState.reports}
        });
    });
  }
  postReport(e) {
    e.preventDefault();
    const date = new Date();
    const newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const feedername = this.feederName.innerText;
    const reporttype = this.reportType.value;
    const partyresponsible = this.partyResponsible.value;
    const event = this.event.value;
    const dateout = this.dateout.value;
    const timeout = this.timeout.value;
    const datein = this.datein.value;
    const timein = this.timein.value;
    const comment = this.comment.value;
    const status = this.status.innerText;
    const messageBody =  {newDate, feedername, reporttype, partyresponsible, event, dateout, timeout, datein, timein, comment, status};
    const url = `/reports`;
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageBody)
    })
    .then(response => response.json())
    .then(res => {
      this.getReport();
    });
  }

  render() {
    return (
      <div >
        {/* The reports are entered here after submiting and stacked as a list */}
        <div className='report-list'>
          <ul className=''>
            {this.state.reports.map((report, i) => < Report key={i} report={report}/>)}
          </ul>          
        </div>
        {/* This is where the report is populated */}
        <div className='report-form'>
            <form onSubmit={this.postReport}>
                <div className='form-inputs'>
                    <label className='feederHeader' ref={node => this.feederName = node}>{this.props.feeder}</label>
                </div>

                <fieldset className='form-inputs'>
                    {/* Select the report type */}
                    <label>Report Type</label>
                    <select ref={node => this.reportType = node} id='report-type'>
                        <option>FORCED</option>
                        <option>PLANNED</option>
                        <option>EMERGENCY</option>
                        <option>LOAD SHEDDING</option>
                        <option>UF TRIPPING</option>
                    </select>
                </fieldset>                

                <fieldset className='form-inputs'>
                    {/* PartyResponsible */}
                    <label>Party Responsible</label>
                    <select ref={node => this.partyResponsible = node} id='party-responsible'>
                        <option>TCN</option>
                        <option>DISCO</option>
                        <option>GENERATION</option>
                    </select>
                </fieldset>

               <fieldset className='form-inputs'>
                    {/* Event */}
                    <label>Event</label>
                    <select ref={node => this.event = node} id='event'>
                        <option>OC AND EF</option>
                        <option>EMERGENCY TCN</option>
                        <option>EMERGENCY DISCO</option>
                    </select>
               </fieldset>

               <fieldset className='form-inputs'>
                    {/* Date Out */}
                    <label>Date Out</label>
                    <input ref={node => this.dateout = node} type={'date'} id='date'></input>
                </fieldset>

                <fieldset className='form-inputs'>
                    {/* Time out */}
                    <label>TIME OUT</label>
                    <input ref={node => this.timeout = node} type={'time'} id='timeout'></input>
                </fieldset>

                <fieldset className='form-inputs'>
                    {/* Date In */}
                    <label>Date In</label>
                    <input ref={node => this.datein = node} type={'date'} id='date'></input>
                </fieldset>

                <fieldset className='form-inputs'>
                    {/* Time in */}
                    <label>TIME IN</label>
                    <input ref={node => this.timein = node} type={'time'} id='timein'></input>
                </fieldset>

                

                <fieldset className='form-inputs'>
                    {/* Comment */}
                    <label>COMMENT</label>
                    <input ref={node => this.comment = node} type={'text'} id='timein'></input>
                </fieldset>

                <fieldset className='form-inputs'>
                    {/* Status */}
                    <label>STATUS</label>
                    <div ref={node => this.status = node} style={{background: 'purple'}}>{this.state.status === 0 ? 'OFF' : 'ON'}</div>
                </fieldset>
                <br></br>
                <button>Submit</button>
            </form>            
        </div>
      </div>
    )
  }
}

export default Reports;
