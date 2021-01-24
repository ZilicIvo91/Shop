import './App.scss';
import Bag from './components/bag/Bag';
import Header from './components/header/Header';
import Products from './components/products/Products';



import { connect } from 'react-redux';

import Checkout from './components/checkout/Checkout';



function App({ checkout }) {
  
  return (
    
      <div className="App">
      
        <Header />
          <div className="app-main">
              {checkout 
              ? <Checkout />
              : <> 
                  <Products />
                  <Bag />
                </>}
          </div>
          <div>
          
         
          </div>
      
      </div>
  );
}

const mapStateToProps = (state) => {
  return{
    checkout: state.checkout
  }
}

export default connect(mapStateToProps)(App)
