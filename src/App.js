import React, { useState, createContext } from "react";
import "./App.css";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import AddRowButton from "./components/AddRowButton";
// import DeleteRowButton from "./DeleteRowButton";

//creating creaeContext
export const MyContext = createContext();

function App() {
  // Initialize the state with three rows
  const [rows, setRows] = useState([
    { account: "", debitAmount: "", creditAmount: "" }, //default rows
    { account: "", debitAmount: "", creditAmount: "" },
    { account: "", debitAmount: "", creditAmount: "" },
  ]);

  // Function to add a new row
  const addRow = () => {
    //addRow is a function that adds a new row to the rows array
    setRows([...rows, { account: "", debitAmount: "", creditAmount: "" }]); //setRows is a function that sets the rows array
  };

  // // Function to delete a row
  // const deleteRow = (index) => {
  //   setRows(rows.filter((row, i) => i !== index));
  // };

  const deleteRow = (index) => {
    setRows((prevRows) => {
      return prevRows.filter((row, i) => {
        return i !== index;
      });
    });
  };

  // Function to handle changes to the form values
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setRows(
      rows.map((row, i) => {
        if (i === index) {
          // check for which row the change is happening
          return { ...row, [name]: value }; //[name] is a computed property name, debitAmount or creditAmount
        }
        return row;
      })
    );
  };

  // Function to format the numbers as Indian number format
  const formatNumber = (number) => {
    return number.toLocaleString("en-IN", { maximumFractionDigits: 2 });
  };

  // Calculate the total for each row separately
  const rowTotals = rows.map(
    (
      row // rowTotals is an array of strings
    ) => formatNumber(Number(row.creditAmount) - Number(row.debitAmount))
  );

  return (
    <MyContext.Provider
      value={{ rows, handleChange, deleteRow, formatNumber, rowTotals, addRow }}
    >
      <div className="App">
        <table>
          <TableHead />
          <TableBody />
        </table>
        <AddRowButton />
      </div>
    </MyContext.Provider>
  );
}

export default App;
