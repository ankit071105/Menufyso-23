
import { Button, Text,Input,Box,Image, VStack, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import PopupBox from "./PopupBox";
import { color } from "framer-motion";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [table, setTable] = useState("");
  var [bol,setBol]=useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: {id} ,
    });
    dispatch({ type: "calculatePrice" });
  };


  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };


  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  const changeHandler =(e)=>{
    setTable(e.target.value);
 
    box();
  }
  const box=()=>{
    console.log("live")
    setBol(true)
  }
  

  return (
    <div className="cart">
      <main  className="my">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.title}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
           />
          ))
        ) : (
          <h1 className="yy">No Items Yet</h1>
        )}
      </main>

      <aside>
        <h2>Total: ₹{total}</h2>
        <Input ml={1.5} w={60} type="text" mb={2}  value ={table}  onChange={changeHandler} placeholder="Enter Your Table"/>
        <Button ml={1.5} w={60} onClick={handleOpen}>Continue</Button>
        <PopupBox isOpen={isOpen} onClose={handleClose} table={bol} />
      </aside>
    </div>
  );
};

const CartItem = ({ imgSrc,name,price,qty,decrement,increment, deleteHandler, id,}) => (
  <div className="cartItem">
  <Box style={{ width: '100%', height: '50%' }} className="boxm"> {/* Set a fixed height */}
    <Image id="imageid" borderRadius={50}  objectFit={'cover'} src={imgSrc} alt="Item" style={{ width: '100%', height: '100%' }} /> {/* Maintain aspect ratio */}
  </Box>
  <article>
  
    {/* <h3>{name}</h3> */}
    {/* <p>${price}</p> */}
     <VStack>
      <Heading color={"black"}>{name}</Heading>
      <Heading fontSize={25} color={"black"}>₹{price}</Heading>
    </VStack>
    
  </article>
 


    <div>
      <button className="btnp" onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button className="btnp" onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
