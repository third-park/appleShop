import { configureStore, createSlice } from '@reduxjs/toolkit'

  const user = createSlice({
    name: 'user',
    initialState: 'park',
  });
  const stock = createSlice({
    name: 'stock',
    initialState: [10, 12, 14],
  })
  const cartData = createSlice({
    name: 'cartData',
    initialState: [
      {id : 1, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ], 
    reducers:{
      increaseCount(state, action){
        const index = state.findIndex(item=>item.id === action.payload)
        if(index !== -1){
          state[index].count += 1;
        }
      }
    }
  })

  export const { increaseCount } = cartData.actions;


  export default configureStore({
    reducer: {
      user: user.reducer,
      stock: stock.reducer,
      cartData: cartData.reducer,
    }
  })