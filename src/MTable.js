import MaterialTable from "material-table";

export const MTable = () => {
  const data = [
    {
      id: 1,
      title: "The Hunger Games",
      authors: "Suzanne Collins",
      num_pages: 374,
      rating: 4.33,
    },
    {
      id: 2,
      title: "Harry Potter and the Order of the Phoenix",
      authors: "J.K. Rowling",
      num_pages: 870,
      rating: 4.48,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      authors: "Harper Lee",
      num_pages: 324,
      rating: 4.27,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      authors: "Jane Austen",
      num_pages: 279,
      rating: 4.25,
    },
    {
      id: 5,
      title: "Twilight",
      authors: "Stephenie Meyer",
      num_pages: 498,
      rating: 3.58,
    },
    {
      id: 6,
      title: "The Book Thief",
      authors: "Markus Zusak",
      num_pages: 552,
      rating: 4.36,
    },
  ];
  const columns = [
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Authors",
      field: "authors",
    },
    {
      title: "Page Count",
      field: "num_pages",
    },
    {
      title: "Rating",
      field: "rating",
    },
  ];
  return (
    <MaterialTable
      data={data}
      columns={columns}
      title="Books Directory"
    ></MaterialTable>
  );
};

//  Material Table expects two mandatory props one is data, which contains data in raw format by specifying the fields required
//  Second is columns which should have title and fields, fields that will be mapped to the data and the title of each header
//  Material table we use if wants to have basic functionality like searching sorting on each table head, and if we wants advance
//  functionality like selecting a row highlighting it by default, putting checkboxes or radio buttons, and let us determine if
//  for users we need to give functionality to select one or more than one rows.

// For both of them we have to install this packages "@material-ui/core", "@material-ui/icons" but for material table we have to
// install 'material-table' package and for mui-datatables we need to install 'material-datatables'

// Example with material-table, how we select the row as it is not provided by default
// import { useState } from 'react';
// import MaterialTable from 'material-table';
// import { data } from '../data';
// const MTable = () => {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const columns = [
//     { title: 'Title', field: 'title' },
//     { title: 'Author', field: 'authors' },
//     { title: 'Page Count', field: 'num_pages' },
//     { title: 'Rating', field: 'rating' }
//   ];
//   return (
//     <div style={{ maxWidth: '100%' }}>
//       <MaterialTable
//         columns={columns}
//         data={data}
//         title='Books Directory'
//         onRowClick={(evt, selectedRow) =>
//           setSelectedRow(selectedRow.tableData.id)
//         }
//         options={{
//           search: false,
//           rowStyle: rowData => ({
//             backgroundColor:
//               selectedRow === rowData.tableData.id ? '#67aeae' : '#FFF'
//           })
//         }}
//       />
//     </div>
//   );
// };
// export default MTable;

// Example with mui-datatables, here the row selection is by default and how we can make the checkbox in the row

// const MUITable = () => {
//   const columns = [
//     { label: 'Title', name: 'title' },
//     { label: 'Author', name: 'authors' },
//     { label: 'Page Count', name: 'num_pages', options: { sort: true } },
//     { label: 'Rating', name: 'rating' }
//   ];
//   const options = {
//     filterType: 'checkbox'
//   };
//   return (
//     <div style={{ maxWidth: '100%' }}>
//       <MUIDataTable
//         columns={columns}
//         data={data}
//         title='Books Directory'
//         options={options}
//       />
//     </div>
//   );
// };
// export default MUITable;
