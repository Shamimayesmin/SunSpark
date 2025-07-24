import { IProduct } from "@/types/cartTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface ICart {
  cartItems: IProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const cartItems = global?.localStorage
  ? JSON.parse(global?.localStorage.getItem("cartItem") as string)
  : [];

const initialState: ICart = {
  cartItems: cartItems ? cartItems : [],
  cartTotalQuantity: cartItems?.length ? cartItems?.length : 0,
  cartTotalAmount: cartItems?.reduce((total: number, item: IProduct) => {
    return total + item.price * item.quantity;
  }, 0),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart(state, action) {
    // 	state.cartItems.push(action.payload);
    // 	localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    // },

    // addToCart: (state, action) => {

    //     const existingItemIndex = state.cartItems.findIndex(item => item._id === action.payload.id);
    //     if (existingItemIndex >= 0) {
    //       state.cartItems[existingItemIndex].quantity += 1;
    //     } else {
    //       const product = { ...action.payload, quantity: 1 };
    //       state.cartItems.push(product);
    //     }
    //   },

    addToCart: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item with the same ID already exists, increment its quantity

        state.cartItems[existingItemIndex].quantity += Number(
          action.payload.quantity
        )
          ? Number(action.payload.quantity)
          : 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        const product = {
          ...action.payload,
          quantity: Number(action.payload.quantity)
            ? Number(action.payload.quantity)
            : 1,
        };

        state.cartItems.push(product);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));

      // Calculate total price after adding the item
      state.cartTotalAmount = state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    // addToCart: (state, action) => {
    //     const itemIndex = state.cartItems.findIndex((item)=>item._id === action.payload.id);
    //     if(itemIndex >= 0){
    //         state.cartItems[itemIndex].quantity += 1
    //     }else{
    //         const product = {...action.payload, quantity : 1}
    //         state.cartItems.push(product);
    //         toast.success(`${action.payload.name} added to cart`)
    //     }
    //     localStorage.setItem('cartItem', JSON.stringify(state.cartItems));

    // },

    // addToCart: (state, action: PayloadAction<IProduct>) => {
    //     const existing =
    //     state.cartItems.find((product) => product._id === action.payload._id);

    //     if(existing){

    //        existing.quantity = existing.quantity! + 1;
    //     }else{
    //         state.cartItems.push({...action.payload, quantity: 1})
    //     }
    //     state.cartTotalAmount += action.payload.price;
    // },

    // removeItem: (state, action) => {
    // 	const nextCartItems = (state.cartItems = state.cartItems.filter(
    // 		(item) => item._id !== action.payload._id
    // 	));
    // 	state.cartItems = nextCartItems;
    // 	localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    // },
    removeFromCart: (state, action) => {
      const removedItemId = action.payload;
      const removedItemIndex = state.cartItems.findIndex(
        (item) => item.id === removedItemId
      );
      if (removedItemIndex !== -1) {
        const removedItem = state.cartItems[removedItemIndex];
        state.cartItems.splice(removedItemIndex, 1);
        state.cartTotalAmount -= removedItem.price * removedItem.quantity;
        // Update local storage
        localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "cartTotalAmount",
          state.cartTotalAmount.toString()
        );
      }
    },

    // removeFromCart: (state, action: PayloadAction<IProduct>) => {
    // 	state.cartItems = state.cartItems.filter(
    // 		(product) => product._id !== action.payload._id
    // 	);

    // 	state.cartTotalAmount -= action.payload.price * action.payload.quantity!;
    // },

    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      console.log("id", id);
      const item = state.cartItems.find((item: any) => item.id === id);

      if (item) {
        item.quantity += 1;
        state.cartTotalQuantity += 1;
        // Calculate total price after adding the item
        state.cartTotalAmount = state.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      }
    },

    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item: any) => item._id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.cartTotalQuantity -= 1;
          // Calculate total price after adding the item
          state.cartTotalAmount = state.cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);
        } else {
          // If quantity is 1, remove the item from the cart
          const itemIndex = state.cartItems.findIndex(
            (item: any) => item._id === id
          );
          if (itemIndex !== -1) {
            const removedItem = state.cartItems.splice(itemIndex, 1)[0];
            state.cartTotalQuantity -= removedItem.quantity;
            // Calculate total price after adding the item
            state.cartTotalAmount = state.cartItems.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0);
          }
        }
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item: any) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// If an item with the same ID already exists in the cart, its quantity will be incremented.
// If the item with the given ID doesn't exist in the cart, a new item with the specified ID, name, price, and quantity of 1 will be added to the cartItems array.
