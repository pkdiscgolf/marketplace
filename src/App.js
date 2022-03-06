import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Shop from './pages/Shop'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path = '/shop' element={<Shop />} />
          <Route path = '/profile' element={<Profile />} />
          <Route path = '/sign-in' element={<SignIn />} />
          <Route path = '/sign-up' element={<SignUp />} />
          <Route path = '/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <NavBar />
      </Router>
      <ToastContainer />
    </>   
  ) 
}
export default App