import React, { useState } from 'react';
import {
  SimpleGrid,
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import Toggle from './Toggle';


interface NavbarProps {
  onSearch: (query: string) => void;
}

const NavBar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <Box borderTop="1px solid #d9d9d9" borderBottom="1px solid #d9d9d9" padding={4}>
      <SimpleGrid columns={[1, null, 3]} spacing={4}>
        <Box>
         <Toggle />
        </Box>
        <Box>
          <InputGroup>
            <InputLeftElement
              onClick={handleSearch} // Handle click event on the input field itself
              cursor="pointer" // Set cursor style to indicate it's clickable
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search..."
              pr="4.5rem" // To allow space for the clickable icon
            />
          </InputGroup>
        </Box>
        <Flex justifyContent={['center', null, 'flex-end']}>
          <Button colorScheme="blue">
            Click Me
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default NavBar;
