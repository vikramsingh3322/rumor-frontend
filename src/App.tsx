import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';

import NavBar from './NavBar';


const App: React.FC = () => {

  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async (keyword: string) => {
    setKeyword(keyword);
    setPage(1); // Reset page to 1 when performing a new search

    try {
      const response = await axios.get('https://express-backend-image-app.herokuapp.com/images', {
        params: { keyword, page: 1 },
      });
      console.log(response);
      const data = response.data.data;
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <Box p={1}>
      <Box mt={0} p={1}>
      <NavBar onSearch={handleSearch} />
      </Box>
    </Box>
  );
};

export default App;
