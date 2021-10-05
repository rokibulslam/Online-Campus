import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AllCourses from './components/AllCourses/AllCourses';
import Banner from './components/Banner/Banner';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login.js/Login';
import NavBar from './components/NavBar/NavBar';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <div className="App overflow-hidden">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path ="/">
              <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/partner">
              <Partners></Partners>
          </Route>
          <Route path="/about">
              <AboutUs></AboutUs>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
