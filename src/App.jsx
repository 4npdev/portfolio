import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Work from "./pages/Work"
import NotFound from "./components/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/work" element={<Work />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
