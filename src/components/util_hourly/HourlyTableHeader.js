import React from 'react';

class HourlyTableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Table'
    }
  }

  render() {

    return (
      <thead>
        <tr>
          <th className="tg-zb4j">FEEDERS/HR</th>
          <th className="tg-zb4j">01:00</th>
          <th className="tg-zb4j">02:00</th>
          <th className="tg-zb4j">03:00</th>
          <th className="tg-zb4j">04:00</th>
          <th className="tg-zb4j">05:00</th>
          <th className="tg-zb4j">06:00</th>
          <th className="tg-zb4j">07:00</th>
          <th className="tg-zb4j">08:00</th>
          <th className="tg-zb4j">09:00</th>
          <th className="tg-zb4j">10:00</th>
          <th className="tg-zb4j">11:00</th>
          <th className="tg-zb4j">12:00</th>
          <th className="tg-zb4j">13:00</th>
          <th className="tg-zb4j">14:00</th>
          <th className="tg-zb4j">15:00</th>
          <th className="tg-zb4j">16:00</th>
          <th className="tg-zb4j">17:00</th>
          <th className="tg-zb4j">18:00</th>
          <th className="tg-zb4j">19:00</th>
          <th className="tg-zb4j">20:00</th>
          <th className="tg-zb4j">21:00</th>
          <th className="tg-zb4j">22:00</th>
          <th className="tg-zb4j">23:00</th>
          <th className="tg-zb4j">24:00</th>
        </tr>
      </thead>
    )
  }
}

export default HourlyTableHeader;
