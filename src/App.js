import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <h1>This is a search page</h1>
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
