import React, { useState } from 'react';
import { Box, Heading, Image, Flex } from '@chakra-ui/react';
import { FaTag } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

interface SearchResult {
  id: number;
  originalUrl: string;
  name: string;
}

interface SearchResultsProps {
  searchResults: SearchResult[];
}

Modal.setAppElement('#root'); // Set the app element for accessibility

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const openModal = (url: string) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(undefined);
  };

  return (
    <Box marginTop={10}>
      <Heading as="h2" size="md">
        Search Results
      </Heading>
      <Flex flexWrap="wrap" justifyContent="flex-start" mt={4}>
        {searchResults.map((photo) => (
          <Box key={photo.id} mb={2} pr={2} position="relative">
            <Box
              minHeight="200px"
              maxHeight="200px"
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              cursor="pointer"
              onClick={() => openModal(photo.originalUrl)}
            >
              {/* Left Side Icon */}
              <Box
                position="absolute"
                bottom="4px"
                left="4px"
                margin="4px"
                padding="4px"
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                fontSize="8px"
                display="flex"
                alignItems="center"
              >
                <FaTag />
              </Box>

              {/* Bottom Right Icon */}
              <Box
                position="absolute"
                bottom="4px"
                right="4px"
                margin="4px"
                padding="4px"
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                fontSize="8px"
                display="flex"
                alignItems="center"
              >
                <FontAwesomeIcon icon={faTag} />
                <Box marginLeft="2px">{photo.name}</Box>
              </Box>

              <Image
                src={photo.originalUrl}
                alt={`Image ${photo.id}`}
                maxW="100%"
                maxH="200px"
                minH="200px"
                objectFit="contain"
              />
            </Box>
          </Box>
        ))}
      </Flex>

      <Modal
        isOpen={selectedImage !== undefined}
        onRequestClose={closeModal}
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            position: 'static',
            maxWidth: '60%',
            maxHeight: '60%',
            width: 'auto',
            border: 'none',
            background: 'transparent',
            overflow: 'auto',
          },
        }}
      >
        <Image
          src={selectedImage}
          alt="Selected Image"
          maxW="100%"
          maxH="100%"
          objectFit="contain"
        />
      </Modal>
    </Box>
  );
};

export default SearchResults;
