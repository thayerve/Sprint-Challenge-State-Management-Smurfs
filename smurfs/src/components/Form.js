import React, { useState } from "react";
// import ReactDOM from "react-dom";

import { connect } from 'react-redux';
import { postSmurf } from '../actions';


function SmurfForm(props) {
  // console.log('props in SmurfForm component: ', props);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = event => {
    event.preventDefault();
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newSmurf);
    props.postSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: ""
    })
  }

    return (
      <form onSubmit={event => handleSubmit(event)}>
        <h3> Welcome, new Smurf! Would you like to join our village? </h3>
        <h4> Tell us about yourself! </h4>
        <div>
        <label>
          Smurf Name:
          <input type="text" name="name" placeholder="Smurf name" value={newSmurf.name} onChange={handleChange} />
        </label>
        </div>

        <div>
        <label>
          Smurf Age:
        <input type="text" name="age" placeholder="Smurf age" value={newSmurf.age} onChange={event => handleChange(event)} />
        </label>
        </div>

        <div>
        <label>
          Smurf Height:
        <input type="text" name="height" placeholder="Smurf height" value={newSmurf.height} onChange={event => handleChange(event)} />
        </label>
        </div>


        <button>Join us!</button>
      </form>
    );
  }

  const mapStateToProps = state => {
    return {
      ...state,
      isFetching: state.isFetching,

    }
  }

  export default connect(mapStateToProps, { postSmurf })(SmurfForm);