import {Link, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';

function App() {
  return (
    <>
		{/* En react no se usan 'a hrefs' porque estos recargan la pagina. En cambio, se utilizan los 'link to'. */}

		<Link to="/">Home</Link>
		<br />
		<Link to="/about">About</Link>
		<br />
		<Link to="/contact">Contact</Link>
		<br />
		<Link to="/products/1">Products</Link>
		<br />

		<hr />
		{/* En react se utilizan los 'Routes' para decir que cosa cargar segun el link */}
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path='/products/:id' element={<Products />}/>

			<Route path='*' element={<NotFound />}/>

		</Routes>
	</>
  );
}

export default App;
 