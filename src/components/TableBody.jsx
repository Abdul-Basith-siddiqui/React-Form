import React from "react";
import TableRow from "./TableRow";

import { useContext } from "react";
import { MyContext } from "../App";

const TableBody = () => {
  const { rows } = useContext(MyContext);
  return (
    <tbody>
      {rows.map((row, index) => (
        <TableRow row={row} key={index} index={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
