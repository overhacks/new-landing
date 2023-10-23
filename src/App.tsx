import { useCallback, useEffect } from "react";
import "./stylesheets/App.css";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import AppScreen from "./screens/AppScreen";
import { routes } from "./constants/routes";
import HomeScreen from "./screens/HomeScreen";
import Gstyles from "./stylesheets/gstyles";
// import Loader from "components/loader";

function App() {


  const navigate = useNavigate();

  const useRunSyncEvent = (cb: () => void) => {
    useEffect(() => {
      const runSync = () => {
        cb();
      }
  
      runSync();
    }, [cb]);
  }

  // const checkIsLoaded = useCallback(() => {
  //   const isLoaded = !isLoading && res !== undefined;

  //   if (isLoaded) {
  //     localStorage.setItem(TOKEN_KEY, res.data.token);
  //     setUser(res.data.user);
  //     setAuthorized(true);
  //     navigate('/home/dashboard', { replace: false });
  //   }
  // }, [isLoading, res, setUser, setAuthorized, navigate]);

  const checkIsLoaded = useCallback(() => {
      navigate('/home/hackatons', { replace: false });
  }, [navigate]);

  useRunSyncEvent(() => {
    checkIsLoaded()
  });


  navigate('/home/', { replace: false });

  
  return (
    <AppScreen>
      <Routes>
        <Route path={`${routes.home}/*`} element={<HomeScreen />} />
      </Routes>
      <Gstyles />
     </AppScreen>
  );
}

export default App;
