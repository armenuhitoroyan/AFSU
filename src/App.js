import "./App.css";
import Footercomponent from "./Components/Footer/FooterComponent";

import Header from "./Components/Header/Header";
import Home3 from "./Components/Homepages/Home3";
import Home1 from "./Components/Homepages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Home1 */}
      <Home1 />

      {/* Home3 */}
      <Home3 />

      <Footercomponent />
    </div>
  );
}

export default App;
