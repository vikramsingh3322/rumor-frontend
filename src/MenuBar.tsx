import React from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  ChakraProvider,
  useColorMode,
} from '@chakra-ui/react';
import { Icon, HamburgerIcon } from '@chakra-ui/icons';
import { FaCaretDown, FaRibbon, FaBox, FaBacon } from 'react-icons/fa';

const MenuBar: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <ChakraProvider>
      <Box bg={isDark ? 'gray.800' : 'white'} marginTop={20}>
        <Flex alignItems="flex-start">
          <Box>
            <Button variant="ghost" colorScheme="gray">
              <Icon as={FaRibbon} color={isDark ? 'white' : 'gray.800'} />
            </Button>
            <Button variant="ghost" colorScheme="gray">
              <Icon as={HamburgerIcon} color={isDark ? 'white' : 'gray.800'} />
            </Button>
          </Box>

          <Flex flexWrap="wrap" alignItems="center">
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  bg="#e0e0e0"
                  borderRadius="20px"
                  py={4}
                  fontSize="12px"
                  marginRight="3px"
                >
                  Caret <Icon as={FaCaretDown} color={isDark ? 'white' : 'gray.800'} />
                </MenuButton>
                <MenuList bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'white' : 'black'}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Box>

            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  bg="#e0e0e0"
                  borderRadius="20px"
                  py={4}
                  fontSize="12px"
                  marginRight="3px"
                >
                  Variant <Icon as={FaCaretDown} color={isDark ? 'white' : 'gray.800'} />
                </MenuButton>
                <MenuList bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'white' : 'black'}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Box>

            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  bg="#e0e0e0"
                  borderRadius="20px"
                  py={4}
                  fontSize="12px"
                  marginRight="3px"
                >
                  Caret <Icon as={FaCaretDown} color={isDark ? 'white' : 'gray.800'} />
                </MenuButton>
                <MenuList bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'white' : 'black'}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Box>

            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  bg="#e0e0e0"
                  borderRadius="20px"
                  py={4}
                  fontSize="12px"
                  marginRight="3px"
                >
                  Keys <Icon as={FaCaretDown} color={isDark ? 'white' : 'gray.800'} />
                </MenuButton>
                <MenuList bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'white' : 'black'}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Box>

            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  bg="#e0e0e0"
                  borderRadius="20px"
                  py={4}
                  fontSize="12px"
                  marginRight="3px"
                >
                  Tiger <Icon as={FaCaretDown} color={isDark ? 'white' : 'gray.800'} />
                </MenuButton>
                <MenuList bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'white' : 'black'}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Box>

            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  bg="#e0e0e0"
                  borderRadius="20px"
                  py={4}
                  fontSize="12px"
                  marginRight="3px"
                >
                  Carpet <Icon as={FaCaretDown} color={isDark ? 'white' : 'gray.800'} />
                </MenuButton>
                <MenuList bg={isDark ? 'gray.700' : 'gray.100'} color={isDark ? 'white' : 'black'}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Box>
          </Flex>

          <Spacer />
          <Box>
            <Button variant="ghost" colorScheme="gray">
              <Icon as={FaBox} color={isDark ? 'white' : 'gray.800'} />
            </Button>
            <Button variant="ghost" colorScheme="gray">
              <Icon as={FaBacon} color={isDark ? 'white' : 'gray.800'} />
            </Button>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default MenuBar;
