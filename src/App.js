import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ProductslistPG from './pages/Prodcuts_PG/Productlist_pg';
import AddProdcut_Page from './pages/Prodcuts_PG/AddProdcut_pg';
import EditProdcut_Page from './pages/Prodcuts_PG/EditProdcut_pg';
import Layout_1 from './layouts/Layout_1';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

// user
import Regiser_Page from './pages/Users/Register_pg';
import SignIn_Page from './pages/Users/SignIn_pg';
import Profile_pg from './pages/Users/Profile_pg';


import Uploads_pg from './pages/Uploads/Upload_pg';
import Home_pg from './pages/Home_PG/Home_pg';


// requiring authentication
const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/SignIn" replace={true} />;
};

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Regiser_Page />} />
          <Route path="/SignIn" element={<SignIn_Page />} />
         
          <Route path="/" element={
            <RequireAuth>
              <Layout_1 />
            </RequireAuth>
          }>
            <Route index element={<Home_pg />} />
            <Route path="products" element={<ProductslistPG />} />
            <Route path="profile" element={<Profile_pg />} />
            <Route path="uploads" element={<Uploads_pg />} />
            <Route path="add" element={<AddProdcut_Page />} />
            <Route path="update/:id" element={<EditProdcut_Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
