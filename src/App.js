import "./App.css";
import Form from "./Form";
import EntryTable from "./EntryTable";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RegistrationForm />} />
            <Route path="registration" element={<RegistrationForm />} />
            <Route path="entrytable" element={<EntryTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
