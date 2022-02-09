import React from 'react';

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.fetchReadings = this.fetchReadings.bind(this);
    this.onChange = this.onChange.bind(this);
    this.persistReadings = this.persistReadings.bind(this);
    this.state = {
      value: '',
      level: '132',
      date: this.props.date
    }
  }
  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchReadings();
  }
  componentWillUnmount() {
    this._isMounted =  false;
  }
  // Fetch readings again after component date props update from inside the Table component
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.date !== this.props.date) {
      this._isMounted && this.fetchReadings()
    }
  }
  matchValue(value) {
    let val;
    if(value === 'current') {
      val = 'amp'
    } else if(value === 'voltage') {
      val = 'kv'
    } else if(value === 'power') {
      val = 'mw';
    } else val = 'undefined';
    return val;
  }
  // This function fetches the amp value for each column coresponding to an hour
  fetchReadings() {
    const type = this.props.type.split('_');
    const url = `/${type[1]}?feeder_name=${this.props.feeder_name}&${type[1]}_id=${this.props.id}&date=${this.props.date}&level=132&type=${type[0]}`;
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
      let val, unit;
      unit = this.matchValue(type[1]);
      const  resp = new Object(res.res);
      if(resp[unit] === 0) {
        val = '';
      } else val = resp[unit];
      // consider using the prevState to store the db value and see if it changes the performance
       prevState.value = val;
       return { value: prevState.value};
    }));
  }
  // OnChange save it in state and push it to the server for real time communication
  onChange(event) {
    const type = this.props.type.split('_');
    const url = `/${type[1]}?feeder_name=${this.props.feeder_name}&${type[1]}_id=${this.props.id}&level=132&type=${type[0]}&station=${this.props.station}&date=${this.props.date}`;
    let data = event.target.innerHTML;
    data = Number(data) === 0 || isNaN(Number(data)) ? 0 : Number(data);
    const id = `${this.props.id}`;
    const name =  `${type[1]}_id`;
    const types = type[0];
    const feeder_name = this.props.feeder_name;
    const date = this.props.date;
    const station = this.props.station
    const bodyData = {data: data, feeder_name: feeder_name, name: name, id: id, level: 33, types: types,station: station, date: date};
    this.persistReadings(url, bodyData);
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
