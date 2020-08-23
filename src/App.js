import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage/>
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
