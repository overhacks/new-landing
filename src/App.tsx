import { useCallback, useEffect } from "react";
import "./stylesheets/App.css";
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import AppScreen from "./screens/AppScreen";
import { routes } from "./constants/routes";
import HomeScreen from "./screens/HomeScreen";
import Gstyles from "./stylesheets/gstyles";
// import Loader from "components/loader";


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function App() {

  return (
    <AppScreen>
      <Routes>
      <Route index element={<Navigate to={`${routes.hackatons}/`} replace />} />
      <Route path="/" element={<Outlet />} />
        <Route path={`${routes.hackatons}/*`} element={<HomeScreen />} />
      </Routes>
      <Gstyles />
     </AppScreen>
  );
}

export default App;
