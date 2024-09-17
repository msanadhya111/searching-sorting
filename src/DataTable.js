import { useContext } from "react";
import TableDataContext from "./store/table-data-context";

export const DataTable = () => {
  const dataContext = useContext(TableDataContext);
  const tableData = dataContext.tableData;
  const handleSort = (event) => {
    const sortId = event.target.id;
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
    dataContext.updateDataOnSort(tableData);
  };
  return (
    <>
      <table>
        <tr onClick={handleSort}>
          <th id="name">Name</th>
          <th id="college">College</th>
          <th id="company">Company</th>
        </tr>
        {tableData.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.college}</td>
              <td>{value.company}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
