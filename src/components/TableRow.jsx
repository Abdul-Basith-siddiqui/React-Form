import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";

const TableRow = ({ row, index }) => {
  const { rowTotals, deleteRow, handleChange } = useContext(MyContext);

  return (
    <tr key={index}>
      <td>
        <select
          name="account"
          value={row.account}
          onChange={(event) => handleChange(event, index)}
        >
          <option value="">Select an account</option>
          <option value="Account 1">Account 1</option>
          <option value="Account 2">Account 2</option>
          <option value="Account 3">Account 3</option>
        </select>
      </td>
      <td>
        <input
          type="number"
          name="debitAmount"
          value={row.debitAmount}
          onChange={(event) => handleChange(event, index)}
        />
      </td>
      <td>
        <input
          type="number"
          name="creditAmount"
          value={row.creditAmount}
          onChange={(event) => handleChange(event, index)}
        />
      </td>
      <td>{rowTotals[index]}</td>
      <td>
        <button type="button" onClick={() => deleteRow(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
