import React from "react";

export default function Districts({ districts, setDist }) {
  const districtDrop = districts.map((dis) => (
    <option key={dis.district_id} id={dis.district_id}>
      {dis.district_name}
    </option>
  ));
  return (
    <div className="district-dropdown">
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue="Default"
        id="selected-district"
        onChange={setDist}>
        <option value="Default">Select District</option>
        {districtDrop}
      </select>
    </div>
  );
}
