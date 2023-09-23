import "./App.css";
import Mensaje from "./Mensaje";
import Description from "./Description";

const App = () => {
  return (
    <div className="App">
      <Mensaje color="blue" message="Estamos trabajando"></Mensaje>
      <Mensaje color="red" message="en un curso de"></Mensaje>
      <Mensaje color="yellow " message="React "></Mensaje>
      <Description></Description>
    </div>
  );
};

export default App;
