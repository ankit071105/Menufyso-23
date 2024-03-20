import { Box, Container, Heading, Text, Flex, Avatar, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from 'react'
import img from "../assets/12.jpeg"
import imgs from "../assets/11.png"
const About = () => {
  return (
    <Box id="about" py={12}    background={"purple.800"}>
      <Container maxW="container.lg" >
        <MotionHeading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="blue.200"
       
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </MotionHeading>
        <Stack spacing={6} mb={12} px={[4, 8]}>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.200"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
        
Menufy is a cutting-edge platform revolutionizing the dining experience by seamlessly integrating QR code technology with restaurant orders. With Menufy, customers can effortlessly scan a QR code displayed at their table, granting them instant access to the restaurant's digital menu and ordering system. Gone are the days of waiting for a server to take your order; Menufy empowers diners to browse through a diverse array of dishes, customize their selections, and place their order directly from their smartphone or tablet. This innovative solution not only enhances efficiency and convenience but also prioritizes safety and hygiene by minimizing physical contact. Whether patrons are dining in or taking out, Menufy ensures a seamless and satisfying culinary experience for all.
          </MotionText>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.500"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
    Zomato is your go-to resource for discovering great places to eat around you. From top-rated restaurants to local favorites, we're on a mission to ensure nobody has a bad meal.
          </MotionText>
        </Stack>
        <MotionHeading
          as="h3"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Meet Our Team
        </MotionHeading>
        <Flex justifyContent="center" flexWrap="wrap">
          
          <TeamMember name="Ankit Kumar" role="Founder & CEO"   imageUrl={imgs} delay={1.8} />
          <TeamMember name="Himanshu Kumar" role="Front-End Developer" imageUrl={img} delay={2.2} />
          {}
        </Flex>
      </Container>
    </Box>
  );
};

const TeamMember = ({ name, role, imageUrl, delay }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      textAlign="center"
      mx={6}
      my={8}
      borderRadius="lg"
      bg="white"
      p={4}
      boxShadow="lg"
      maxWidth="250px"
    >
      <Avatar size="2xl" src={imageUrl} name={name} mb={4} borderColor="blue.800" borderWidth={2} />
      <Text fontSize="xl" fontWeight="bold" color="blue.800">{name}</Text>
      <Text fontSize="lg" color="gray.700">{role}</Text>
    </MotionBox>
  )
}

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default About