import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Counter from './components/Counter/Counter.jsx';
import Login from './screens/Login/Login';*/
import Counter2 from './components/Counter2/Counter.jsx';


function App() {
  return (
    <>
    <Navbar>
    <CartWidget/>
    </Navbar>
   {/* <ItemListContainer />
    <Login />
   <Counter/> */}
    <Counter2/>
    </>
  );
}

export default App;
