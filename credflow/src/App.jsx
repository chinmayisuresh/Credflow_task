import logo from './logo.svg';
import './App.css';
import { Product } from './components/Products';
import { Routes ,Route} from 'react-router-dom';
import { Cartpage } from './components/Cart';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/cart' element={<Cartpage/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
