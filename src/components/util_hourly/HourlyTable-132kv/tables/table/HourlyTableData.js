import React from 'react';

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.fetchReadings = this.fetchReadings.bind(this);
    this.onChange = this.onChange.bind(this);
    this.persistReadings = this.persistReadings.bind(this);
    this.state = {
      value: '',
      level: '33'
    }
  }
  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchReadings(this.props.id);
  }
  componentWillUnmount() {
    this._isMounted =  false;
  }
  // This function fetches the amp value for each column coresponding to an hour
  fetchReadings(dataId) {
    const url = `/current?feeder_name=${this.props.feeder_name}&current_id=${dataId}`;
    fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => this.setState( prevState => {
      let val;
      const  resp = new Object(res.res);
      if(resp.amp === 0) {
        val = '';
      } else val = resp.amp;
      // consider using the prevState to store the db value and see if it changes the performance
       prevState.value = val;
       return { value: prevState.value};
    }));
  }
  // OnChange save it in state and push it to the server for real time communication
  onChange(event) {
  const url = `/current?feeder_name=${this.props.feeder_name}&current_id=${this.props.id}&level=33&type=${this.props.type}&station=${this.props.station}`;
    let data = event.target.innerHTML;
    data = Number(data) === 0 || isNaN(Number(data)) ? 0 : Number(data);
    this.persistReadings(url, {data: data});
  }
   // Use this code to persist data to the database. 
   async persistReadings(url, data) {
    // Format the data for persisting on the database    
    // send the data over the network to the database api
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json());
  }
  render() {
    const { value } = this.state;
    // onChange Function updates the server with inputs into the columns
    return (
      <td id={`start-${this.props.count}`} onKeyUp={this.onChange} suppressContentEditableWarning={true} contentEditable="true" defaultValue={value} className="tg-e7p8" >{value}</td>
    )
  }
}

export default TableData;
