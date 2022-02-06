import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import ls from 'local-storage';
// import fetchJsonp from 'fetch-jsonp';
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";

const SignUp = (props) => {
  const history = useHistory();
  let [name, setName] = useState("");
  let [staff_id, setStaffId] = useState("");
  let [station, setStation] = useState("");
  let [email, setMail] = useState("");
  let [password, setPassWord] = useState("");
  // const match = useRouteMatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "/signup";
    const data = {
      name,
      staff_id,
      station,
      email,
      password
    }
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( (res) => res.json())
    .then( (response) => {
        //pass the user data to the state of the App
        // Set the app state with the details of the user
        props.setUser(response.data);
      // ls.set('token', response.data.token);
      // This would push to the signin page for the user to now login
      history.push(`/signin`);
    })
    .catch( e => console.error(e));
  }
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row my-4">
        <div className="col-sm-4 mx-auto mt-4 pt-4 bg-white shadow">
          <div className="signup-bg-user"></div>
          <form className="mt-3" onSubmit={handleSubmit} autoComplete="on">
            <Text
              placeholder="Names"
              type="text"
              name={name}
              nameChange={ setName }
              icon="fa fa-user"
            />
            <div className="input-group mb-3 border-bottom">
              <select
                className="form-control custom-select border-0"
                required
                name="station"
                onChange={ e => setStation(e.target.value)}
              >
                <option value="">Station</option>
                <option value="Lekki">Lekki</option>
                <option value="Akangba">Akangba</option>
                <option value="Oworo">Oworo</option>
                <option value="Ajah">Ajah</option>
                <option value="Amuwo">Amuwo</option>
                <option value="Enugu">Enugu</option>
                <option value="Ikeja-West">Ikeja-West</option>
                <option value="Oke-Aro">Oke-Aro</option>
                <option value="Egbin">Egbin</option>
                <option value="Benin">Benin</option>
                <option value="Osogbo">Osogbo</option>
                <option value="Ayede">Ayede</option>
                <option value="Jebba">Jebba</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Jos">Jos</option>
                <option value="Ugwuaji">Ugwuaji</option>
                <option value="Sapele">Sapele</option>
                <option value="Gwagwa">Gwagwa</option>
                <option value="Ikot-Ekpene">Ikot-Ekpene</option>
                <option value="Alaoji">Alaoji</option>
                <option value="Onitsha">Onitsha</option>
                <option value="Lokoja">Lokoja</option>
                <option value="Katampe">Katampe</option>
                <option value="Gombe">Gombe</option>                
                <option value="Ajaokuta">Ajaokuta</option>
                <option value="Delta">Delta</option>
                <option value="B/Kebbi">B/Kebbi</option>
              </select>
              <div className="input-group-append">
                <span
                  className="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-university"></span>
                </span>
              </div>
            </div>
            <Text
              placeholder="Staff Id"
              type="text"
              name="staff_id"
              icon="fa fa-map-marker"
              nameChange={ setStaffId }
            />           
            <Text
              placeholder="User Email"
              type="email"
              name="email"
              icon="fa fa-envelope"
              nameChange={ setMail }
            />
            <Text
              placeholder="Password"
              type="password"
              name="paassword1"
              icon="fa fa-lock"
              nameChange={ setPassWord }
            />
            <Link
              question="Already Registered? "
              link="Sign In"
              linkTo="/signin"
            />
            <Button text="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
