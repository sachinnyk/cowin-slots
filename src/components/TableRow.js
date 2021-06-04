import React from "react";
import dayjs from "dayjs";
import { Table } from "semantic-ui-react";

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
    <Table.Cell
      key={index}
      error={col.available_capacity === 0 ? true : false}
      warning={col.available_capacity === "NA" ? true : false}>
      {col.available_capacity}
      <br />
      {col.min_age_limit !== "NA" ? <p>Age Limit {col.min_age_limit}+ </p> : ""}
    </Table.Cell>
  ));

  return (
    <Table.Row>
      <Table.Cell>{col.name}</Table.Cell>
      {tdComponents}
    </Table.Row>
  );
}
