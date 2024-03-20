import React, { useState } from 'react'
import { Link, Navigate ,useNavigate} from 'react-router-dom'
import {FiShoppingBag,FiSearch} from "react-icons/fi"
import { HStack, Input ,Image,InputRightElement,InputGroup, Button,} from '@chakra-ui/react'
import img from "../assets/MenuFy.png"
import { FaSearch } from 'react-icons/fa'
import data from '../assets/data.json'
import { Items } from './Items'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const fullData = data.projects.concat(data.NonVeg, data.Chinese, data.Biryani, data.SoutIndian)
  // console.log(fullData);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const {cartItems} = useSelector(state=>state.cart);
  
  
  function search() {
    if(searchQuery!=''){
      const filteredItems =fullData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(`data ${filteredItems}`);
      //  return <Navigate to={<Items data={filteredItems} />}/>
      const searchData = { prop1: filteredItems };

     

    // Navigate to another page with props
    navigate('/items', { state: searchData });
    }
  }

  return (
    <nav id='nav'>
    
    <Image css={{
        transform:'translateY(-10%)'
    }} src={img} h={130}/>
    <div>
    <HStack>
    
    {}
  <InputGroup>
    <InputRightElement >
      <Button onClick={search} size={'larger'}><FaSearch color='purple' /></Button>
    </InputRightElement>
    <Input  isInvalid
    errorBorderColor='red.300'
    _placeholder={{ opacity: 1, color: 'gray.500' }}
    placeholder='Search for food'
    color={'black'} type='text' 
    value={searchQuery} 
    onChange={handleSearchChange} />
  </InputGroup>
    </HStack>
            <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/cart"}><FiShoppingBag/>
        <a href='#home'></a>
        <p>{cartItems.length}</p></Link>
    </div>
</nav>
  )
}

export default Header