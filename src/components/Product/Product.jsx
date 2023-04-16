function Product(props) {
  return (
    <div>
      <img src={props.imageUrl} width="200" />
      <h3>{props.name}</h3>
      <p>Price: {props.price}$</p>
      {props.available ? <button>Купити</button> : <p>Товар не доступний</p>}
    </div>
  );
}

export default Product;
