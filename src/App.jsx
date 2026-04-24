import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./components-work/Project";
import NotFound from "./components-home/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/project/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;