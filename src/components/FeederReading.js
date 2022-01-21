import React from 'react';
import {withRouter} from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeders: {}
    }
  }
  fetchFeeders() {

  }

  render() {

    return (
      <div className="container-fluid">
        <h1> Select a feeder to input readings </h1>
        <div className="row">
          <div className="col-3">
            <label> Lekki </label>
          </div>
          <div className="col-3">
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
            <select>
              <optgroup>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
                <option>

                </option>
              </optgroup>
            </select>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(Footer);
