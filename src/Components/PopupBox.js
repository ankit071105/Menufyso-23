// PopupBox.js
import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Radio, RadioGroup, Stack, Button, Table, Heading } from '@chakra-ui/react';

const PopupBox = ({ isOpen, onClose ,table}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Selected Option:', selectedOption);
    // You can add your logic to handle form submission
    // For example, sending data to a server, etc.
    // Don't forget to close the modal after submission
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} table={table}>
      <ModalOverlay />
      <ModalContent>
        {table?<><ModalHeader>Payment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            <Stack direction="column">
              <Radio value="option1">Cash</Radio>
              <Radio value="option2">Online</Radio>
            </Stack>
          </RadioGroup>
          <Button colorScheme="blue" onClick={handleSubmit} mt={4}>Submit</Button>
        </ModalBody></>:<>
            <ModalCloseButton/>
            <ModalBody >
                <Heading size={'small'}>Enter Table Number First</Heading>
            </ModalBody>
        </>}
      </ModalContent>
    </Modal>
  );
};

export default PopupBox;
