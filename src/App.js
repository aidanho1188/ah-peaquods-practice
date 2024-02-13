import './App.css';
import {useState} from 'react';
// import './components/*';
import Layout from './components/Layout';
import Content from './components/Content';
import Product from './components/Product';
import Cart from './components/Cart';

const products = [
  {
    id: 1,
    name: 'product 1',
    price: '99.99',
    catergory: 'pizze',
  },
  {
    id: 3,
    name: 'product 1',
    price: '99.99',
    catergory: 'pizze',
  },
  {
    id: 2,
    name: 'product 1',
    price: '99.99',
    catergory: 'pizze',
  },
];

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div className="App">
      <Layout>
        <header>
          <h1>Peaquods</h1>
        </header>
        <main>
          <Content>
            <Product cart={cart} products={products} updateCart={updateCart} />
            <Cart />
          </Content>
        </main>
        <footer>Peaquods &copy 2024</footer>
      </Layout>
    </div>
  );
}

export default App;
