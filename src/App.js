import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './img/Pentar.png';
import { HomePageContent } from './components/HomePageContent.js';
import { Team } from './components/Team.js';
import { Home } from './components/Home.js';
import { Stories } from './components/Stories.js';
import { UserProfile } from './components/UserProfile';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <div className ="Header">
          <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
            <div className='container'>
              <a class="navbar-brand waves-effect" href="https://mdbootstrap.com/docs/jquery/">
                <img src={Logo} alt="Logo" />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link class="nav-link waves-effect" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect" to="/home">Read</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect" to="/userhome">Write</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect" to="/myteam">Publish</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect" to="/mystories">My Stories</Link>
                  </li>
                </ul>
                <ul class="navbar-nav nav-flex-icons">
                  <li class="nav-item">
                    <a href="https://www.facebook.com/mdbootstrap" class="nav-link waves-effect">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://twitter.com/MDBootstrap" class="nav-link waves-effect">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link waves-effect">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://mdbootstrap.com/docs/jquery/newsletter/"
                      class="nav-link border border-light rounded waves-effect mr-2">
                      <i class="fas fa-envelope mr-1"></i>Newsletter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div> 
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/home' component={HomePageContent}></Route>
          <Route exact path='/myteam' component={Team}></Route>
          <Route exact path='/mystories' component={Stories}></Route>
          <Route exact path='/userhome' component={UserProfile}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
