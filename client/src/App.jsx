import { Navigate, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, ProfilePage } from "./scenes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
