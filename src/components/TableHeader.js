import React from "react";
import dayjs from "dayjs";
import { Table } from "semantic-ui-react";

export default function TableHeader() {
  const rowlist = [];
  for (let i = 0; i < 7; i++) {
    rowlist.push(dayjs().add(i, "d").format("DD-MMM"));
  }

  const rowlistComponent = rowlist.map((list, index) => (
    <Table.HeaderCell key={index}>{list}</Table.HeaderCell>
  ));
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        {rowlistComponent}
      </Table.Row>
    </Table.Header>
  );
}
