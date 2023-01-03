import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
// import About from './components/About/About';
import NoteState from './context/notes/NoteState';
import Login from './components/User/LogIn/Login';
import SignUp from './components/User/SignUp/SignUp';
import AlertState from './context/Alert/AlertState';

function App() {



  return (

    <>

      <AlertState>

        <NoteState>

          <Router>

            <NavBar />

            <div className="container">

              <Routes>

                <Route exact path='/' element={<Home />}> </Route>
                <Route exact path='/home' element={<Home />}> </Route>
                <Route exact path='/login' element={<Login />}> </Route>
                <Route exact path='/signup' element={<SignUp />}> </Route>

              </Routes>

            </div>


          </Router>

        </NoteState>

      </AlertState>


    </>

  );

}

export default App;
