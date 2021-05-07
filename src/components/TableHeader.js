import React from "react";
import dayjs from "dayjs";

export default function TableHeader() {
  const rowlist = [];
  for (let i = 0; i < 7; i++) {
    rowlist.push(dayjs().add(i, "d").format("DD-MMM-YYYY"));
  }

  const rowlistComponent = rowlist.map((list, index) => (
    <th key={index} scope="col">
      {list}
    </th>
  ));
  return (
    <thead className="table-dark">
      <tr>
        <th scope="col">Centers</th>
        {rowlistComponent}
      </tr>
    </thead>
  );
}
