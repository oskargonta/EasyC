import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  useEffect(() => emailjs.init("X4hJp7nK_M9hAGtM0"), []);


  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
export default App;
