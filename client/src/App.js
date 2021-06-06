import React from "react";
import Search from './pages/search'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from './pages/archive'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/archive' component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;