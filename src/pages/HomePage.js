import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { fetchNews, searchNews } from '../store/newsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);
  const [category, setCategory] = useState('general');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const pageSize = 12;
  const country = 'in';

  useEffect(() => {
    if (query) {
      dispatch(searchNews({ query, pageSize, page }));
    } else {
      dispatch(fetchNews({ country, category, pageSize, page }));
    }
  }, [category, page, query, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    dispatch(searchNews({ query, pageSize, page: 1 }));
  };

  return (
    <div className="home-page">
      <CategoryFilter selectedCategory={category} onSelectCategory={setCategory} />
      <form onSubmit={handleSearch} className="search-form">
        <input
          className='Search-Bar'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for articles..."
        />
        <button type="submit">Search<FaSearch/></button>
      </form>
      {status === 'loading' ? <Loader /> : <ArticleList articles={articles} />}
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;
