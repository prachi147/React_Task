import { useState } from "react"
import PropTypes from 'prop-types';

const AddProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = { name, price };
        addProduct(newProduct);
        setName('');
        setPrice('');
    };

    return <>
        <section>
            <main>
                <div className="container">
                    <div className="productForm">
                        <h2>Add Products </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="inputFields">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ProductName"> required</input>
                                </div>

                                <div className="inputFields">
                                <input type="text" value={price} onChange={(e) => setName(e.target.value)} placeholder="price"> required</input>
                                </div>

                                <button type="submit">Add Products </button>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    </>
}

AddProductForm.propTypes = {
    addProduct: PropTypes.func.isRequired,
};
export default AddProductForm;