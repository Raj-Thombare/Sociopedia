import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, ProfilePage } from "./scenes";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={isAuth ? <HomePage /> : <Navigate to='/login' />}
          />
          <Route
            path='/profile/:userId'
            element={isAuth ? <ProfilePage /> : <Navigate to='/login' />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
