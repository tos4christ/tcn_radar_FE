import React from 'react';

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <li className='report-li'>
        <a href='#/' className='edit-report'>edit</a>
        <span className='report-span'>{this.props.report['feedername']}</span>
        <span className='report-span'>{this.props.report['reporttype']}</span>
        <span className='report-span'>{this.props.report['partyresponsible']}</span>
        <span className='report-span'>{this.props.report['event']}</span>
        <span className='report-span-comment'>{this.props.report['comment']}</span>
      </li>
    )
  }
}

export default Report;
