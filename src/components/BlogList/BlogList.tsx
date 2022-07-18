import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogItem } from '..';
import { IDataList } from '../../utils/data';
import './BlogList.scss';

interface IBlogListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogs: IDataList[];
}

function BlogList({ className, blogs, ...props }: IBlogListProps) {
  const transition = { type: 'tween', duration: 3 };
  return (
    <motion.div
      className={cn(className, 'blog-list')}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ...transition, duration: 2 }}>
      <AnimatePresence>
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default BlogList;
