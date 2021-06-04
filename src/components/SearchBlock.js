import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Table } from "semantic-ui-react";

export default function SearchBlock({ searchResult }) {
  const cols = searchResult.map((col, index) => <TableRow key={index} col={col} />);

  return (
    <div className="search-block">
      <Table celled unstackable selectable textAlign="center">
        <TableHeader></TableHeader>
        <Table.Body>{cols}</Table.Body>
      </Table>
    </div>
  );
}
