import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>
  );
}


export default App;
