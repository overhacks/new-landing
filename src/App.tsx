import "./stylesheets/App.css";
import AppScreen from "./screens/AppScreen";
import HomeScreen from "./screens/HomeScreen";
import Gstyles from "./stylesheets/gstyles";


import { register } from 'swiper/element/bundle';
register();

function App() {

  return (
    <AppScreen>
      <HomeScreen />
      <Gstyles />
     </AppScreen>
  );
}

export default App;
