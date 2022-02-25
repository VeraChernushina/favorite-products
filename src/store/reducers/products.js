const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Красный шарф',
      description: 'Милый красный шарфик.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Голубая рубашка',
      description: 'Прекрасная голубая рубашка.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Зеленые брюки',
      description: 'Пара симпатичных зеленых брюк.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Оранжевая шляпа',
      description: 'Цвет сезона!',
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV':
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
