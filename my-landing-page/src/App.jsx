import Header from './component/Header';
import Footer from './component/Footer';
import ProductPage from './component/ProductPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default App;
