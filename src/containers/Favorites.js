import { useSelector } from 'react-redux';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = () => {
  const favProducts = useSelector((state) =>
    state.shop.products.filter((p) => p.isFavorite)
  );
  let content = <p className="placeholder">Нет избранных товаров!</p>;
  if (favProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
