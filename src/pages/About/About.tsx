import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Heading } from '../../components';
import { lampsImg, playIcon, videoImg } from '../../images';
import './About.scss';

function About() {
  const [play, setPlay] = useState<boolean>(false);

  const transition = { type: 'tween', duration: 3 };
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: custom * 0.6 },
    }),
  };

  return (
    <motion.div className="about" initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
      <Heading span="about" text="us" className="about__heading" />
      <motion.h3 className="about__subtitle" custom={1} variants={textAnimation}>
        NOOM is a young rapidly growing design company that produces lighting, decor and home
        accessories.
      </motion.h3>
      <div className="about__row">
        <motion.div
          className="about__video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition, duration: 2 }}>
          <div
            className="about__img-container"
            onClick={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.zIndex = '-1';
              setPlay(true);
            }}>
            <img src={videoImg} alt="video" className="about__video-img" />
            <img src={playIcon} alt="play" className="about__play-icon" />
          </div>
          <ReactPlayer
            url="https://www.youtube.com/embed/rxYSau3zNIQ"
            controls
            playing={play}
            progressInterval={1000}
            width="100%"
            height="99%"
            style={{ position: 'absolute', top: '0', left: '0' }}
          />
        </motion.div>
        <div className="about__content">
          <motion.p custom={2} variants={{ ...textAnimation, hidden: { x: 100, opacity: 0 } }}>
            We create timeless design products which will be passed from generation to generation.
            NOOM is a place where design meets art. Company was founded in 2017 by industrial
            designer Kateryna Sokolova and designer, entrepreneur Arkady Vartanov who has 10 years’
            experience of manufacturing and his own workshop Postformula Craft. Kateryna Sokolova is
            an internationally established designer who collaborates with world-famous brands like
            Ligne Roset, Forestier, Jarre Technologies, Bolia etc.
          </motion.p>
        </div>
      </div>
      <div className="about__description">
        <motion.div custom={3} variants={textAnimation} className="about__text">
          <p>
            Most of our products are made from metal. We produce them by combining both traditional
            and modern manufacturing technologies. Every single piece involves careful manual work
            of our craftsmen. All products are made in our own workshop. This enables us to oversee
            the entire production process and pay attention to every single detail.
          </p>
          <p>
            We have a chemical specialist in our team who works on oxidation and patina on metals
            and creates new unique effects and colors for our limited edition products.
          </p>
        </motion.div>
        <motion.div
          className="about__shape-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ ...transition, duration: 2 }}>
          <motion.img
            src={lampsImg}
            alt="lamps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ...transition, duration: 2, delay: 1 }}
          />
        </motion.div>
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
