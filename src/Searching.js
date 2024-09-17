import { useContext } from "react";
import TableDataContext from "./store/table-data-context";

export const Searching = () => {
  const dataContext = useContext(TableDataContext);
  let delay;
  const performSearch = (event) => {
    const searchValue = event.target.value;
    const tableData = dataContext.data;
    const dataAfterSearch = [];
    tableData.forEach((data) => {
      const name = data.name;
      if (
        name.slice(0, searchValue.length).toLowerCase() ===
        searchValue.toLowerCase()
      )
        dataAfterSearch.push(data);
    });
    dataContext.updateDataOnSearch(dataAfterSearch);
  };
  const handleSearch = (event) => {
    clearTimeout(delay);
    setTimeout(() => performSearch(event), 1000);
  };

  return (
    <input
      type="search"
      onKeyUp={handleSearch}
      style={{ width: "250px", height: "22px" }}
    />
  );
};
