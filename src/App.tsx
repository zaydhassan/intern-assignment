import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserForm from './components/UserForm'; 
import DepartmentList from './components/DepartmentList'; 
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/user-form" />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/department-list" element={<DepartmentList />} />
          
          <Route path="*" element={<Navigate to="/user-form" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
