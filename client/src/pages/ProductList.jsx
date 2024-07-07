import PropTypes from 'prop-types';

const ProductList =({product}) =>{

    if(product.length === 0){
        return <p> No Product Found !! </p>
    }

    return <>
     <ul>
      {product.map((product, index) => (
        <li key={index}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
    </>
}

ProductList.propTypes = {
    product: PropTypes.func.isRequired,
};
export default ProductList;