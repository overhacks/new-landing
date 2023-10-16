import { useCallback, useEffect } from "react";
import "./stylesheets/App.css";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import AppScreen from "./screens/AppScreen";
import { routes } from "./constants/routes";
// import Loader from "components/loader";

function App() {
  return (
    <AppScreen>
      {/* <Routes>
        <Route path={`${routes.home}/*`} element={<HomeScreen />} />
        <Route path="/test" element={<TestScreen />} />
      </Routes> */}
      <h1>Hello world</h1>
     </AppScreen>
  );
}

export default App;
