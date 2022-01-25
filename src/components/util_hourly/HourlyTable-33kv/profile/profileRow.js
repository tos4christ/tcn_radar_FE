import React from 'react';

class ProfileRow extends React.Component {
  constructor(props) {
    super(props); 
    this._isMounted = false;
    this.state = {
      feederData: {}
    }
    this.getProfile = this.getProfile.bind(this);
  }
 
  componentDidMount() {
    this.getProfile(this.props.feeder_name);
  }
  getProfile(feeder_name) {
    const url = `/current/profile?feeder_name=${feeder_name}`;
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
        return this.setState(prevState => {
            prevState.feederData = new Object(res.res);
            return {feederData: prevState.feederData}
        })
    });
  }

  render() {
    return (
      <tr>
        <td className="tg-e7p8">{this.props.feeder_name}</td>
        <td className="tg-e7p8">{this.state.feederData.amp ? this.state.feederData.amp : ''}</td>
        <td className="tg-e7p8">{this.state.feederData.hour ? this.state.feederData.hour : ''}</td>
      </tr>
    )
  }
}

export default ProfileRow;
