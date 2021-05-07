import React from "react";
import dayjs from "dayjs";

export default function TableRow({ col }) {
  const coltemp = [];
  const rowlist = [];

  for (let i = 0; i < 7; i++) {
    rowlist.push(dayjs().add(i, "d").format("DD-MM-YYYY"));
  }

  function checkCapacity(date) {
    let capacity = { available_capacity: "NA", min_age_limit: "NA" };
    for (const session in col.sessions) {
      if (col.sessions[session].date === date) {
        capacity.available_capacity = col.sessions[session].available_capacity;
        capacity.min_age_limit = col.sessions[session].min_age_limit;
      }
    }
    return capacity;
  }

  rowlist.forEach((row) => {
    const a = checkCapacity(row);
    coltemp.push({
      date: row,
      available_capacity: a.available_capacity,
      min_age_limit: a.min_age_limit,
    });
  });

  const tdComponents = coltemp.map((col, index) => (
    <td key={index} className="tableData">
      <span>{col.available_capacity}</span>
      <br />
      {col.min_age_limit !== "NA" ? <span> Age Limit {col.min_age_limit}+</span> : ""}
    </td>
  ));

  return (
    <tr>
      <th scope="row" className="tableData">
        {col.name}
      </th>

      {tdComponents}
    </tr>
  );
}
