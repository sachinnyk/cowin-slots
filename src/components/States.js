import React from "react";

export default function States(props) {
  const statesDrop = props.states.map((st) => (
    <option key={st.state_id} id={st.state_id}>
      {st.state_name}
    </option>
  ));

  return (
    <div className="states-dropdown">
      <select
        className="form-select "
        aria-label="Default select example"
        defaultValue="Default"
        id="selected-state"
        onChange={props.fetchDistricts}>
        <option value="Default">Select State</option>
        {statesDrop}
      </select>
    </div>
  );
}
