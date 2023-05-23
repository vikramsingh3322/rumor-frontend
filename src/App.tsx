import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import MenuBar from './MenuBar';
import SearchResults from './SearchResults';

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

  const handlePageChange = async (newPage: number) => {
    setPage(newPage);

    try {
      const response = await axios.get('https://express-backend-image-app.herokuapp.com/images', {
        params: { keyword, page: newPage },
      });
      console.log(response);
      const data = response.data.data;
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(searchResults.length / 10); // Assuming 10 results per page

    if (totalPages <= 1) {
      return null; // No need to render pagination if only one page of results
    }

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={page === i}
          marginRight={2}
        >
          {i}
        </Button>
      );
    }

    return <Box display="flex" justifyContent="center">{pages}</Box>;
  };

  return (
    <Box p={1}>
      <Box mt={0} p={1}>
        <NavBar onSearch={handleSearch} />
        <MenuBar />
        <SearchResults searchResults={searchResults} />
        {renderPagination()}
      </Box>
    </Box>
  );
};

export default App;
