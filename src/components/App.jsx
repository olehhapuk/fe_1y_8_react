import Product from './Product';

// const numbers = [3, 5, 9];

// const updatedNumbers = numbers.map((num) => <p>{num}</p>);

// console.group('Numbers:');
// console.log(numbers);
// console.groupEnd();

// console.group('Updated numbers:');
// console.log(updatedNumbers);
// console.groupEnd();

const productsData = [
  {
    name: 'Tacos',
    price: 10.99,
    imageUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
    available: true,
  },
  {
    name: 'Pizza',
    price: 12.5,
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg',
    available: false,
  },
  {
    name: 'Burger',
    price: 999.99,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg?crop=1.00xw:0.755xh;0,0.166xh&resize=1200:*',
    available: true,
  },
  {
    name: 'Burger Copy',
    price: 9.99,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg?crop=1.00xw:0.755xh;0,0.166xh&resize=1200:*',
    available: true,
  },
];

function App() {
  return (
    <div>
      {productsData.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          available={product.available}
        />
      ))}
    </div>
  );
}

export default App;
