import Card from '../UI/Card';

import './ProductItem.css';

const ProductItem = (props) => {
  const toggleFavHandler = () => {};

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2>Тестовый товар</h2>
        <p>Описание тестового товара</p>
        <button onClick={toggleFavHandler}>Кнопочка</button>
      </div>
    </Card>
  );
};

export default ProductItem;
