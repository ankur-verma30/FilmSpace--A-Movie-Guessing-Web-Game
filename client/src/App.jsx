import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./Components/Footer"
import Notfound from "./Components/Notfound"
import Navbar from "./Components/Navbar"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
function App() {
 

  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/settings' element={<Settings />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
