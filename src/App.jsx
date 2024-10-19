//import './App.css'

import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import RestaurantDetails from "./pages/RestaurantDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/restaurant/:id" Component={RestaurantDetails} />
    </Routes>
  );
};

export default App;
