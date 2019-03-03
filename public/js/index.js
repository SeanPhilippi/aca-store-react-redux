import state from 'state.js';

const rootReducer = combineReducers({
  products,
  shoppingCart
});

const store = createStore(
  rootReducer,
  state,
)

function products(state, action) {
  return state;
}

function shoppingCart(state, action) {
  if (action.type === 'ADD_PRODUCT_TO_CART') {
    return [...state, action.value]
  }

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return [...state, action.value];
    case 'PRODUCTS':
      return state
    default:
      return state
  }
}


ReactDOM.render(
    <App 
      numberOfItemsInCart = {state.numberOfItemsInCart}
      products={state.products}
    />
    ,document.getElementById("root"));


