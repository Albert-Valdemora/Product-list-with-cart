export const CarritoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const existingProductIndex = state.findIndex(p => p.name === action.payload.name);

      if (existingProductIndex >= 0) {
        const updatedCart = state.map((item, index) =>
          index === existingProductIndex ? { ...item, cantida: action.payload.cantida } : item
        );
        return updatedCart;
      } else {
        return [...state, { ...action.payload}];
      }


    case 'delete':
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};