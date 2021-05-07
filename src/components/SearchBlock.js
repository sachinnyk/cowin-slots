import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
export default function SearchBlock({ searchResult }) {
  const cols = searchResult.map((col, index) => <TableRow key={index} col={col} />);

  return (
    <div className="search-block">
      <table className="table table-striped table-hover">
        <TableHeader />
        <tbody>{cols}</tbody>
      </table>
    </div>
  );
}
