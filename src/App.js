import { Routes, Route, Link } from "react-router-dom";

import Landing from "./component/Landing";
import List from "./component/List";
import Form from "./component/Form";
import "./css/layout.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Landing</Link>
        <Link to="/form">Form</Link>
        <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="form" element={<Form />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
