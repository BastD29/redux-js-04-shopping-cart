import CurrencyFilter from './features/currencyFilter/CurrencyFilter';
import Inventory from './features/inventory/Inventory';
import Cart from './features/cart/Cart';

function App(props) {
  const {state, dispatch} = props;
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
