import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {

  return (

    <>

      <Router>

        <NavBar />

        <Routes>

          <Route exact path='/' element={<Home />}> </Route>
          <Route exact path='/home' element={<Home />}> </Route>
          <Route exact path='/about' element={<About />}> </Route>

        </Routes>

      </Router>



    </>

  );

}

export default App;
