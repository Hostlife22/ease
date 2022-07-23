import { motion } from 'framer-motion';
import { FaBook, FaHome, FaPaste } from 'react-icons/fa';
import { Heading } from '../../components';
import { textAnimation, transition } from '../../utils/animation';
import './About.scss';

function About() {
  return (
    <motion.div className="about" initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
      <Heading span="about" text="us" className="about__heading" />
      <motion.h3 className="about__subtitle" custom={1} variants={textAnimation}>
        EASE is a young rapidly growing design company that produces lighting, decor and home
        accessories.
      </motion.h3>

      <motion.div
        className="about__row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}>
        <div className="about__item">
          <div className="about__item-iner">
            <div className="about__icon">
              <FaBook />
            </div>
            <h4>Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo nihil quae
              vitae quod cumque porro qui consequatur laborum ullam, rerum numquam perferendis et
            </p>
          </div>
        </div>
        <div className="about__item">
          <div className="about__item-iner">
            <div className="about__icon">
              <FaHome />
            </div>
            <h4>Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo nihil quae
              vitae quod cumque porro qui consequatur laborum ullam, rerum numquam perferendis et
            </p>
          </div>
        </div>
        <div className="about__item">
          <div className="about__item-iner">
            <div className="about__icon">
              <FaPaste />
            </div>
            <h4>Achievements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo nihil quae
              vitae quod cumque porro qui consequatur laborum ullam, rerum numquam perferendis et
            </p>
          </div>
        </div>
      </motion.div>
      <div className="about__content">
        <motion.h3 custom={2} variants={textAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repudiandae?
        </motion.h3>
        <motion.p custom={3} variants={textAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores recusandae
          asperiores officia aut, autem earum expedita dolorum minus aliquid iure commodi quia
          consectetur! Consectetur at eligendi mollitia voluptates aut ab culpa nemo praesentium
          aperiam, corrupti quasi blanditiis in nam expedita assumenda magnam accusantium minus
          aspernatur quidem laborum delectus maiores.
        </motion.p>
        <motion.p custom={4} variants={{ ...textAnimation, hidden: { x: 100, opacity: 0 } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores recusandae
          asperiores officia aut, autem earum expedita dolorum minus aliquid iure commodi quia
          consectetur! Consectetur at eligendi mollitia voluptates aut ab culpa nemo praesentium
          aperiam, corrupti quasi blanditiis in nam expedita assumenda magnam accusantium minus
          aspernatur quidem laborum delectus maiores.
        </motion.p>
      </div>

      <motion.div
        className="about__shape"
        initial={{ opacity: 0, right: '15%' }}
        whileInView={{ opacity: 1, right: '30%' }}
        transition={{ ...transition, type: 'tween' }}
      />
    </motion.div>
  );
}

export default About;
