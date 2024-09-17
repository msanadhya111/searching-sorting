import { useContext } from "react";
import TableDataContext from "./store/table-data-context";

export const Sorting = ({ sortId }) => {
  const tableContext = useContext(TableDataContext);
  const tableData = tableContext.tableData;
  switch (sortId) {
    case "name":
      tableData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      break;
    case "college":
      tableData.sort((a, b) => {
        if (a.college > b.college) return 1;
        else if (a.college < b.college) return -1;
        else return 0;
      });
      break;
    default:
      tableData.sort((a, b) => {
        if (a.company > b.company) return 1;
        else if (a.company < b.company) return -1;
        else return 0;
      });
  }
  tableContext.updateDataOnSort(tableData);
};
