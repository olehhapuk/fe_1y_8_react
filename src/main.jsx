import { createRoot } from 'react-dom/client';

const rootElem = document.querySelector('#root');

// const data = {
//   name: 'Tacos',
//   price: 10.99,
//   imageUrl:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   available: true,
// };

function Product(props) {
  return (
    <div>
      <img src={props.imageUrl} width="200" />
      <h3>{props.name}</h3>
      <p>Price: {props.price}$</p>
      {/* {props.available && <button>Купити</button>} */}
      {props.available ? <button>Купити</button> : <p>Товар не доступний</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Product
        name="Tacos"
        price={10.99}
        imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        available={true}
      />
      <Product
        name="Pizza"
        price={12.5}
        imageUrl="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
        available={false}
      />
      <Product
        name="Burger"
        price={999.99}
        imageUrl="https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg?crop=1.00xw:0.755xh;0,0.166xh&resize=1200:*"
        available={true}
      />
    </div>
  );
}

createRoot(rootElem).render(<App />);
