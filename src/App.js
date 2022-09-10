import { Routes, Route, Link } from "react-router-dom";

import Landing from './component/Landing';
import List from './component/List';
import Form from './component/Form';
import RideInfo from './component/RideInfo';
import './App.css';

function App() {
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
}

export default App;
