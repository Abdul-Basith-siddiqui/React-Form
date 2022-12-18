import React from "react";

const AddRowButton = ({ addRow }) => {
  return (
    <button type="button" onClick={addRow}>
      Add Row
    </button>
  );
};

export default AddRowButton;
