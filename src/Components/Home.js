import { Container,Heading,Box,Image,Button,Text,VStack,HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/food.jpg"
import { FaArrowDown,FaScroll,FaInstagram,FaLinkedinIn,FaGithub ,FaFacebook , FaTwitter , FaYoutube , FaTelegram, FaPeopleCarry,FaMap } from 'react-icons/fa'
import {BsFillPlayCircleFill}  from 'react-icons/bs' 
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../assets/data.json"
import { Items } from './Items'
import { toast } from 'react-hot-toast'
import { useDispatch,useSelector } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state=>state.cart)
  console.log(`cart item is ${cartItems}`)
 const addToCart =(title,price,id,quantity,imgSrc,description,category)=>{
    toast.success("Added To Cart")
    const options={title,price,id,quantity,imgSrc,description,category}
     console.log(options)
    dispatch({
      type:"addToCart",
        payload:options
    })
    dispatch({ type: "calculatePrice" });
  }
  
 

    const animation ={
        h1:{
            initial:{
    x:"-100%",
    opacity:0,
    
    },
    whileInView:{
    x:0,
    opacity:1
    }
    
        }
      }
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
  <Container id='home' height={'100vh'} maxW={'container.x1'}  >
    <HStack >
      <VStack marginStart={470}> 
      <VStack marginStart={-2} marginTop={10}>
      <motion.Heading className='heading'>Menufy
      
      <Typewriter  className="type" options={{
    strings:["Find your favorite dishes at one click."],
    autoStart:true,
    loop:true,
    wrapperClassName:"typewriterpara"


}}/>
      
      
      </motion.Heading>


      </VStack>
      <HStack p={7} gap={4}  className='icon'>
      <div className='div' style={{
        animationDelay:"0.3s"
      }}><a  href='https://www.facebook.com/profile.php?id=100055383093406'> <FaFacebook  size={25} /></a></div>
      <div style={{
        animationDelay:"0.5s"
      }} className='div'><a href='https://github.com/ankit071105'><FaGithub size={25}/></a></div>
      <div style={{
        animationDelay:"0.7s"
      }} className='div'><a href='https://www.instagram.com/tech_ankit07/?igsh=MXgxdmRzbWt3NDJybg%3D%3D'><FaInstagram size={25}/></a></div>
      <div style={{
        animationDelay:"1s"
      }} className='div'><a href='https://www.linkedin.com/in/ankit-kumar-01a52827b/?original_referer=https%3A%2F%2Fankit071105.github.io%2F'><FaLinkedinIn size={25}/></a></div>
      <div style={{
        animationDelay:"1.2s"
      }} className='div'><a href='https://twitter.com/AnkitKumar63433'> <FaTwitter size={25}/></a></div>

      </HStack>
      <VStack alignItems={'flex-start'} ms={1} >
      <a href={"#items"}>
        <Button css={{
          '&:hover':{
            transform : 'scale(1.1)'
          }
        }} className='btnt' w={170} h={50} bgColor={'rgb(907, 910, 201)'} id='icon'> <Text marginEnd={2}>Scroll</Text><FaArrowDown color='black' /></Button></a>

      </VStack>
      </VStack>
      
      </HStack>
  </Container>
  <Container  height={'410vh'} id='items' maxW={'container.x1'}>
   <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>VEG </Heading>

   <Slider  {...settings}>
   {data.projects.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}          
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box>

   <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>NON-VEG </Heading>

   <Slider  {...settings}>
   {data.NonVeg.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box>



   <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>CHINESE </Heading>

   <Slider  {...settings}>
   {data.Chinese.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box>


   <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>BIRYANI</Heading>

   <Slider  {...settings}>
   {data.Biryani.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box>

   <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>SOUTH INDIAN</Heading>

   <Slider  {...settings}>
   {data.SoutIndian.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box>

   <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>VEG </Heading>

   <Slider  {...settings}>
   {data.projects.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {/* <Text fontSize="lg" fontWeight="semibold" mb="1">
        ₹{items.price}
        </Text> */}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}          
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box>

   {/* <Box  id='boxx'>
   <Heading fontSize={'30px'} fontFamily={'cursive'} className='itemsheading' color={'black'} size={"md"} noOfLines={1}>NON-VEG </Heading>

   <Slider  {...settings}>
   {data.NonVeg.map((items)=>(
     
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      mt={3}
      mb={3}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={items.imgSrc} alt={items.title} h="150px" w="100%" objectFit="cover" borderRadius="xl" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2" color="teal.500">
          {items.title}
        </Text>
        <Text noOfLines={1} color="gray.600" fontSize="md" mb="1">
          {items.description}
        </Text>
        {}
        <Text noOfLines={1} color="gray.600" fontWeight="semibold" fontSize="lg" mb="1">
        ₹{items.price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          
          onClick={()=>addToCart(items.title,items.price,items.id,items.quantity,items.imgSrc,items.description,items.category)}
          _hover={{ bg: 'teal.600' }}
          w="100%"
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
    ))}
   </Slider>
   </Box> */}




  
  </Container>
  </>
  )
}


export default Home