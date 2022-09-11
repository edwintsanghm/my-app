import { Routes, Route, Link } from "react-router-dom";

import Landing from "./component/Landing";
import List from "./component/List";
import Form from "./component/Form";
import "./css/layout.css";
import "./css/form.css";
import "./css/list.css";
import RideInfo from "./component/RideInfo";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">About</Link>
        <Link to="/form">Form</Link>
        <Link to="/list">List</Link>
        <Link to="/ride">Ride</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="form" element={<Form />} />
        <Route path="list" element={<List />} />
        <Route path="ride" element={<RideInfo />} />
      </Routes>
    </div>
  );
};

export default App;
