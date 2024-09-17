import { useState } from "react";
import TableDataContext from "./table-data-context";

export const TableDataProvider = ({ children }) => {
  const data = [
    {
      name: "Milan",
      college: "VIT",
      company: "WPP",
    },
    {
      name: "Harshit",
      college: "IIT",
      company: "Aditi Consulting",
    },
    {
      name: "Mayank",
      college: "Christ",
      company: "Lenskart",
    },
    {
      name: "Roshan",
      college: "MNIT",
      company: "Pramata",
    },
  ];

  const [tableData, setTableData] = useState(data);
  const updateDataOnSearch = (updatedData) => {
    setTableData(updatedData);
  };
  const updateDataOnSort = (updatedData) => {
    const sortedData = [...updatedData];
    setTableData(sortedData);
  };
  return (
    <TableDataContext.Provider
      value={{ data, tableData, updateDataOnSearch, updateDataOnSort }}
    >
      {children}
    </TableDataContext.Provider>
  );
};
