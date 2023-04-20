import styles from './Product.module.css';

function Product({ imageUrl, name, price, available }) {
  return (
    <div>
      <img src={imageUrl} width="200" />
      <h3 className={available ? styles.nameAvailable : styles.nameUnavailable}>
        {name}
      </h3>
      <p className={styles.price}>Price: {price}$</p>
      {available ? <button>Купити</button> : <p>Товар не доступний</p>}
    </div>
  );
}

export default Product;
