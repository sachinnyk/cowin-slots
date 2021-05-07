import React from "react";

export default function Blocks({ blocks }) {
  const blockComponent = blocks.map((block, index) => <option key={index}>{block}</option>);
  return (
    <div className="block-dropdown">
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue="Default"
        id="selected-block">
        <option value="Default">Select Block</option>
        {blockComponent}
      </select>
    </div>
  );
}
