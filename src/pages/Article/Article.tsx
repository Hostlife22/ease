import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmptyList, Heading } from '../../components';
import { textAnimation, transition } from '../../utils/animation';
import { blogList, IDataList } from '../../utils/data';
import './Article.scss';

type ArticleParams = {
  id: string;
};

function Article() {
  const { id } = useParams<ArticleParams>();
  const [blog, setBlog] = useState<IDataList | null>(null);

  useEffect(() => {
    if (id) {
      const blogData = blogList.find((b) => b.id === +id);

      blogData && setBlog(blogData);
    }
  }, [id]);

  return (
    <motion.div
      className="article"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}>
      {blog ? (
        <>
          <Heading span="our" text="blog" className="article__heading" />

          <div className="article__wrap">
            <div className="article__content">
              <motion.p className="article__date" custom={3} variants={textAnimation}>
                Published {blog.createdAt}
              </motion.p>
              <motion.h1 className="article__title" custom={1} variants={textAnimation}>
                {blog.title}
              </motion.h1>
              <motion.div
                className="article__sub-category"
                custom={3}
                variants={{
                  ...textAnimation,
                  hidden: {
                    x: 100,
                    opacity: 0,
                  },
                }}>
                {blog.subCategory.map((category, index) => (
                  <div key={index}>
                    <p className="article__chip">{category}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.img
              src={blog.cover}
              alt="cover"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
            />
            <motion.p className="article__description" custom={2} variants={textAnimation}>
              {blog.description}
            </motion.p>
          </div>
          <motion.div
            className="about__shape"
            initial={{ opacity: 0, right: '15%' }}
            whileInView={{ opacity: 1, right: '30%' }}
            transition={{ ...transition, type: 'tween' }}
          />
        </>
      ) : (
        <EmptyList className="article__empty-list" />
      )}
    </motion.div>
  );
}

export default Article;
