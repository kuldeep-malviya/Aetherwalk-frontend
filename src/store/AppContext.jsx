import { createContext,useReducer } from "react";

export const AppContext = createContext([])

const DataProvider = ({children}) =>{
    const CartReducer = (currentItem, action) => {
        let iteminCart = currentItem;
        // return currentItem
        if (action.type === "ADD_ITEM") {
          const iteminCart = currentItem.find(
            (item) => item.id == action.payload.product.id
          );
          if (iteminCart) {
            return currentItem.map((item) =>
              item.id == action.payload.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...currentItem, { ...action.payload.product, quantity: 1 }];
        } else if (action.type == "DELETE_ITEMS") {
          iteminCart = currentItem.filter(
            (item) => item.id != action.payload.product.id
          );
          return iteminCart;
        } else if (action.type === "QUANTITY_HANDLER") {
          return currentItem.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(1, action.payload.Qunatity) }
              : item
          );
        }
      };
      const [cart, DispatchCart] = useReducer(CartReducer, []);
    
      const addtocart = (product,setCartAnime) => {
        setCartAnime(true)
        const CartItem = {
          type: "ADD_ITEM",
          payload: {
            product: product,
          },
        };
        DispatchCart(CartItem);
      };
      const DeleteCart = (product) => {
        const CartItem = {
          type: "DELETE_ITEMS",
          payload: {
            product: product,
          },
        };
        DispatchCart(CartItem);
      };
      const quantityHandler = (id, Qunatity) => {
        const CartItem = {
          type: "QUANTITY_HANDLER",
          payload: {
            id,
            Qunatity,
          },
        };
        DispatchCart(CartItem);
      };
    return(
        <AppContext.Provider
      value={{
        addtocart: addtocart,
        cart: cart,
        DeleteCart: DeleteCart,
        quantityHandler: quantityHandler,
      }}
    >
        {children}
    </AppContext.Provider>
    )
}
export default DataProvider