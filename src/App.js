import './App.scss';
import Header from './components/header/Header';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Summary from './components/summary/Summary';
import Checked from './components/checked/Checked';
import BuyCard from './components/buyCard/BuyCard';



function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/summary' component={Summary} />
            <Route path='/checked' component={Checked} />
            <Route path='/' component={BuyCard} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App
