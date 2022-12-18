import React from "react";
import TableRow from "./TableRow";

const TableBody = ({
  rows,
  handleChange,
  deleteRow,
  rowTotals,
  formatNumber,
}) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <TableRow
          row={row}
          index={index}
          handleChange={handleChange}
          deleteRow={deleteRow}
          formatNumber={formatNumber}
          rowTotals={rowTotals}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
