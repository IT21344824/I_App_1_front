import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductslistPG from './pages/Prodcuts_PG/Productlist_pg';
import AddProdcut_Page from './pages/Prodcuts_PG/AddProdcut_pg';
import EditProdcut_Page from './pages/Prodcuts_PG/EditProdcut_pg';
import Layout_1 from './layouts/Layout_1';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

//user
import Regiser_Page from './pages/Users/Register_pg';
import SignIn_Page from './pages/Users/SignIn_pg';
import Profile_pg from './pages/Users/Profile_pg';


function App() {
  const [themeMode, setThemeModel] = useState('light');

  const darkTheme = () => {
    setThemeModel('dark')
  }

  const lightTheme = () => {
    setThemeModel('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', "light")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
        <Routes>
        <Route path="/register" element={<Regiser_Page />} />
        <Route path="/SignIn" element={<SignIn_Page />} />
        <Route path="/profile" element={<Profile_pg />} />


          <Route path="/" element={<Layout_1 />}>
            <Route index element={<ProductslistPG />} />
            <Route path="add" element={<AddProdcut_Page />} />
            <Route path="edit/:id" element={<EditProdcut_Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
