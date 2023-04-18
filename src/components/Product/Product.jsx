import './Product.css';

// const user = { username: 'john', password: '12345678' };
// // const username = user.username;
// // const password = user.password;
// const { username, password } = user;

// console.log(username);

function Product({ imageUrl, name, price, available }) {
  const nameClasses = ['product__name'];
  if (available) {
    nameClasses.push('product__name_available');
  } else {
    nameClasses.push('product__name_unavailable');
  }

  console.log(nameClasses);

  return (
    <div>
      <img src={imageUrl} width="200" />
      <h3 className={nameClasses.join(' ')}>{name}</h3>
      <p>Price: {price}$</p>
      {available ? <button>Купити</button> : <p>Товар не доступний</p>}
    </div>
  );
}

export default Product;
