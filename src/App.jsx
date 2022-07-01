import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Contact from "./components/contact/Contact.jsx";
const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
