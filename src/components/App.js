import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import States from "./States";
import Districts from "./Districts";
import dayjs from "dayjs";
import Blocks from "./Blocks";
import SearchBlock from "./SearchBlock";

function App() {
  const [states, setstates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [districts, setdistricts] = useState([]);
  const [selectedDist, setselectedDist] = useState("");
  const [centers, setCenters] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [searchResult, setsearchResult] = useState([]);

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((res) => {
        setstates(res.states);
      });
  }, []);

  function fetchDistricts() {
    const sel = document.getElementById("selected-state");
    const selState = sel.options[sel.selectedIndex].id;
    setSelectedState(selState);

    //Fetch District List
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selState}`)
      .then((res) => res.json())
      .then((res) => {
        setdistricts(res.districts);
      });
  }

  function setDist() {
    const sel = document.getElementById("selected-district");
    const selDistrict = sel.options[sel.selectedIndex].id;
    setselectedDist(selDistrict);
    const curDate = dayjs().format("DD-MM-YYYY");

    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?date=${curDate}&district_id=${selDistrict}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCenters(res.centers);
        const block_names = [];
        res.centers.forEach((center) => {
          if (!block_names.includes(center.block_name)) {
            block_names.push(center.block_name);
          }
        });
        setBlocks(block_names);
      })
      .catch(function () {
        console.log("Do Nothing");
      });
  }

  function fetchVaxAvail() {
    const block = document.getElementById("selected-block").value;
    const searchBlock = centers.filter((center) => {
      return center.block_name === block;
    });
    setsearchResult(searchBlock);
  }

  return (
    <div className="App">
      <header className="App-header">CoWin Vaccine Availability</header>
      <div className="search-box">
        <States states={states} fetchDistricts={fetchDistricts} />
        {districts.length > 0 ? <Districts districts={districts} setDist={setDist} /> : ""}
        {(districts.length > 0) & (blocks.length > 0) ? (
          <Blocks blocks={blocks} />
        ) : (
          <span>Vaccine are not available in the District</span>
        )}
        <button
          type="button"
          className="btn btn-outline-primary search-btn"
          onClick={fetchVaxAvail}>
          Search
        </button>
      </div>
      {searchResult.length > 0 ? <SearchBlock searchResult={searchResult} /> : ""}
    </div>
  );
}

export default App;
