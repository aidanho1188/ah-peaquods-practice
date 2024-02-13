function Product(props) {
  return (
    <div className="product-list">
      {props.products.map((product) => {
        return (
          <div className="product">
            image <br />
            product name <br />
            $99.99 <br />
            Catergory : stuff <br />
            <button onClick={() => props.updateCart([...props.cart, product.id])}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
