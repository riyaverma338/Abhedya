import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import News from'./components/News';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Studio from './components/Studio';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <Studio/>
    <Portfolio/>
    <News/>
    <Contact/>
    {/* <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/studio" component={Studio} />
    <Route exact path="/portfolio" component={Portfolio} /> */}
    </>
  );
}

export default App;
