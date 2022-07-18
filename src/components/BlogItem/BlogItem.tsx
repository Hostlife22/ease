import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { IDataList } from '../../utils/data';
import './BlogItem.scss';

interface IBlogItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blog: IDataList;
}

function BlogItem({
  className,
  blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover },
}: IBlogItemProps) {
  const navigation = useNavigate();
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={cn(className, 'blog-list__item')}
      onClick={() => navigation(`/blog/${id}`)}>
      <img src={cover} alt={cover} className="blog-list__cover" />
      <p className="blog-list__chip">{category}</p>
      <h3>{title}</h3>
      <p className="blog-list__description">{description}</p>
      <footer>
        <div className="blog-list__author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link to={`/blog/${id}`} className="blog-list__link">
          <FaArrowCircleRight />
        </Link>
      </footer>
    </motion.div>
  );
}

export default BlogItem;
