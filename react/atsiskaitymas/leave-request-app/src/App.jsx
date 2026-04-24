import { Routes, Route } from "react-router";
import RequestsList from "./pages/RequestsList";
import CreateNewRequest from "./pages/CreateNewRequest";
import Home from "./pages/Home";
import RequestDetails from "./components/RequestDetails";
import EditRequest from "./components/EditRequest";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<RequestsList />} />
        <Route path="/requests/new" element={<CreateNewRequest />} />
        <Route path="/requests/:id" element={<RequestDetails />} />
        <Route path="/requests/:id/edit" element={<EditRequest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
