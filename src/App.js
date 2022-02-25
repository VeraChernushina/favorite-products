import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

function App() {
  return (
    <>
      <main>
        <Navigation />
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </>
  );
}

export default App;
