import { GridColDef, GridRowsProp } from '@mui/x-data-grid';  // Ensuring correct types are used
import { DataGridDemo } from './DataGridDemo.1';

// Define the column structure with proper types
export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'body', headerName: 'Body', width: 200 },
];

// Sample data for the grid, typed correctly
export const rows: GridRowsProp = [
  { id: 1, title: 'Hello World', body: 'This is the body content of the first row.' },
  { id: 2, title: 'Second Item', body: 'Here is more text for another row.' },
];

export default DataGridDemo;
