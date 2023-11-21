import "./stylesheets/App.css";
import AppScreen from "./screens/AppScreen";
import HomeScreen from "./screens/HomeScreen";
import Gstyles from "./stylesheets/gstyles";


import { register } from 'swiper/element/bundle';
import Hackatons from "./screens/HackatonsScreen";
register();

function App() {

  return (
    <AppScreen>
      <Hackatons/>
      <Gstyles />
     </AppScreen>
  );
}

export default App;
