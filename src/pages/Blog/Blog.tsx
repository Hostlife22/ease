import { motion } from 'framer-motion';
import { useState } from 'react';
import { BlogList, EmptyList, Heading, SearchBar } from '../../components';
import { transition } from '../../utils/animation';
import { blogList, IDataList } from '../../utils/data';
import './Blog.scss';

function Blog() {
  const [blogs, setBlogs] = useState<IDataList[]>(blogList);
  const [searchKey, setSearchKey] = useState<string>('');

  const handleSearchResults = () => {
    const searchResults = blogList.filter((blog) => {
      return blog.category.toLowerCase().includes(searchKey.toLowerCase().trim());
    });

    setBlogs(searchResults);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div className="blog">
      <Heading span="our" text="blog" className="blog__heading" />
      <motion.h3
        className="blog__subtitle"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}>
        Awesome place to make oneself <br /> productive and entertained through daily updates
      </motion.h3>
      <SearchBar
        className="blog__search"
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? (
        <EmptyList className="blog__empty-list" />
      ) : (
        <BlogList className="blog__blog-list" blogs={blogs} />
      )}

      <motion.div
        className="blog__shape"
        initial={{ opacity: 0, right: '15%' }}
        whileInView={{ opacity: 1, right: '35%' }}
        transition={{ ...transition, type: 'tween' }}
      />
    </div>
  );
}

export default Blog;
