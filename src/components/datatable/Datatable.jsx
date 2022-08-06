import React from "react";
import "./datatable.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "Nationality", headerName: "Nationality", width: 130 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    Nationality: "American",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    Nationality: "British",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    Nationality: "American",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    Nationality: "American",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 23,
    Nationality: "Canadian",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Axel",
    age: 50,
    Nationality: "Greek",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    Nationality: "British",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    Nationality: "Intalian",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 25,
    Nationality: "American",
  },
  {
    id: 10,
    lastName: "Hart",
    firstName: "Rose",
    age: 32,
    Nationality: "British",
  },
  {
    id: 11,
    lastName: "Hopper",
    firstName: "Eddie",
    age: 21,
    Nationality: "American",
  },
  {
    id: 12,
    lastName: "Tahiri",
    firstName: "Amir",
    age: 18,
    Nationality: "Kosovan",
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <h1>User List</h1>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
