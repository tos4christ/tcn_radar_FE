import React from 'react';

class SelectReading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male'
    }
  }

  render() {

    return (
      <div className="row">
        <label className="col-4">
          T11
        </label>
        <select className="col-4">
          <option>

          </option>
          <option>

          </option>
        </select>
        <span>.</span>
        <select className="col-4">
            <option>

            </option>
            <option>

            </option>
        </select>
      </div>
    )
  }
}

export default SelectReading;
