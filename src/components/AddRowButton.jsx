import React from "react";

import { useContext } from "react";
import { MyContext } from "../App";

const AddRowButton = () => {
  const { addRow } = useContext(MyContext);

  return (
    <button type="button" onClick={addRow}>
      Add Row
    </button>
  );
};

export default AddRowButton;
