import './App.css';
import Header from './components/Header';
 default Home;
import React from 'react';
import './App.css';
import Navbar from './components/Sidebar/NavBar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Header from './components/Header';

function App() {
  return (
    <>
     <Header />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
