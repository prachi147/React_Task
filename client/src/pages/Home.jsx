import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AddProductForm from "./AddProductForm";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

const Home = () => {
    const [products, setProducts] = useState([]); 
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
       localStorage.removeItem('isLoggedIn');
       navigate('/login');
    }

    const addProduct = (newProduct) => {
        setProducts((previousProducts) => {
            if (previousProducts.some(product => product.name === newProduct.name)) {
                alert("Product already exists!");
                return previousProducts;
            }
            return [...previousProducts, newProduct];
        });
    };

    const searchProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        
        <section>
            <main>
                <div className="container">
                    <div className="home">
                        <h2>Home Page</h2>
                        <button onClick={handleLogout}>LogOut</button>
                        <AddProductForm addProduct={addProduct} />
                        <SearchBar setSearchQuery={setSearchQuery} />
                        <ProductList products={searchProducts} />
                    </div>
                </div>
            </main>
        </section>

    );

};






export default Home;
