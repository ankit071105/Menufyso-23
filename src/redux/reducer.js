import {createReducer} from "@reduxjs/toolkit"
import { AiFillSafetyCertificate } from "react-icons/ai";

export const cartReducer = createReducer({
      cartItems:[],
      // subTotal:0,
      // shipping:0,
      // tax:0,
      total:0
},
{
    addToCart:(state,action)=>{
     const item = action.payload;
     console.log(`your item ${item.name}`);
     // go niche code h usse add to cart kre pe qty badhe ga na ki dubara cart m aagye ga

     const isItemExist = state.cartItems.find((i)=>i.id===item.id)

     if(isItemExist){
        state.cartItems.forEach(i=>{
            console.log(`tour i ${i}`)
               if(i.id===item.id) i.quantity += 1;

        });

     }else{
        state.cartItems.push(item)
     }

    

     
    },


    
    decrement:(state,action)=>{
      const Item = state.cartItems.find((i)=>i.id===action.payload)
      if (Item.quantity>1){
         state.cartItems.forEach(i=>{
            if(i.id===action.payload) i.quantity -= 1;
         })


      } 
        

    },


    deleteFromCart:(state,action)=>{
      state.cartItems= state.cartItems.filter((i)=>i.id !== action.payload)
    },

    calculatePrice:(state)=>{
      let sum = 0;
      state.cartItems.forEach((i)=>{
         
         sum += i.price * i.quantity
      })
   //   state.subTotal= sum;
   //   state.shipping= state.subTotal > 1000 ? 0 :200

   //   state.tax =(state.subTotal*0.18).toFixed();// substotal ka 18% tax and to fixed is used to remove the decimals
// state.total=state.subTotal + state.tax +state.shipping
    state.total=sum;


              
    },
    




})