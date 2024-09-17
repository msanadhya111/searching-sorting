import React from "react";

const TableDataContext = React.createContext({
  data: [],
  tableData: [],
  updateDataOnSearch: () => {},
  updateDataOnSort: () => {},
});

export default TableDataContext;
