import '../assets/css/App.css';
import Nav from './Nav';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Create from './pages/create/create';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import NoMatch from './pages/noMatch/NoMatch';
import BlogDetails from './pages/blogDetails/BlogDetails';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Router >
        <Nav>
         <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/posts/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*">
            <NoMatch />
          </Route>
          </Switch>
        </Nav>
  
      </Router>
    </div>
  );
}

export default App;
