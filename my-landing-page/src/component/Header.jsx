

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Toko Sepatu</h1>
        <nav>
          <a href="#" className="mx-4 hover:underline">Home</a>
          <a href="#" className="mx-4 hover:underline">Products</a>
          <a href="#" className="mx-4 hover:underline">About</a>
          <a href="#" className="mx-4 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
