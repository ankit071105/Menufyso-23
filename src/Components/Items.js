import {Box,Image,Button, Container, Divider, Heading ,Text} from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
// import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const MotionBox = motion(Box);
export const Items = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {prop1 } = location.state;
  const addToCart = (title,price,id,quantity,imgSrc,description,category)=>{
    const options = {title,price,id,quantity,imgSrc,description,category}
     toast.success("Added To Cart")
    dispatch({
        type:"addToCart",
        payload:options
    })
  }
  return (
   <>
   {console.log(`data 4 ${prop1}`)}
  <Container height={'100vh'} maxW={'container.x1'}>
  {prop1.map((item) => (
            
    <Box display="flex" alignItems="center" justifyContent="center" padding="20px">
      <MotionBox
        maxW="700px"
        borderWidth="3px"
        
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MotionBox
          as={Image}
          height={"200"}
          width={800}
          objectFit={'cover'}
          src={item.imgSrc}
          alt={item.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
          <Heading mt="1" fontSize="xl" fontWeight="bold" lineHeight="tight">
            {item.title}
          </Heading>
            <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" >
              Category : {item.category}
            </Text>
          
          </Box>
          <Text mt="1" color="gray.500" fontSize="sm">
            {item.description}
          </Text>
          <Text mt="2" color="gray.400" fontSize="sm">
            Price:  ₹{item.price}
          </Text>
          <MotionBox
            mt="4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button colorScheme="blue"  onClick={()=>addToCart(item.title,item.price,item.id,item.quantity,item.imgSrc,item.description,item.category)}>
              Add to Cart
            </Button>
          </MotionBox>
        </Box>
      </MotionBox>
    </Box>

          ))}
  </Container>
   </>
  )
}
