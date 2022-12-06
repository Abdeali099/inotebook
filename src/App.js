import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import NoteState from './context/notes/NoteState';

function App() {

  return (

    <>

      <NoteState>

        <Router>

          <NavBar />

          <div className="container my-3">

            <Routes>

              <Route exact path='/' element={<Home />}> </Route>
              <Route exact path='/home' element={<Home />}> </Route>
              <Route exact path='/about' element={<About />}> </Route>

            </Routes>

          </div>


        </Router>

      </NoteState>

    </>

  );

}

export default App;
