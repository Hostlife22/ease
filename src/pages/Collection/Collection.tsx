import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card, Choice, ImgComponent } from '../../components';
import { selectHorizontal } from '../../features/horizontal/horizontalSlice';
import { selectLamp } from '../../features/lamps/lampsSlice';
import { Theme } from '../../features/theme/theme.interface';
import { selectTeme } from '../../features/theme/themeSlice';
import { useAppSelector } from '../../hooks';
import { sceneDarkImg, sceneLightImg } from '../../images';
import './Collection.scss';

function Collection() {
  const theme = useAppSelector(selectTeme);
  const lamp = useAppSelector(selectLamp);
  const isHorizontal = useAppSelector(selectHorizontal);
  const imgBgRef = useRef<HTMLImageElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const resizeRoomDemoLamp = useRef(() => {
    if (imgRef.current && imgBgRef.current) {
      imgRef.current.style.left = `${imgBgRef.current.clientWidth * 0.24}px`;
    }
  });

  const transition = { type: 'tween', duration: 3 };
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: custom * 1 },
    }),
  };

  const imageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget as HTMLImageElement;
    if (imgBgRef.current) {
      img.style.left = `${imgBgRef.current.clientWidth * 0.24}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeRoomDemoLamp.current);

    return () => window.removeEventListener('resize', resizeRoomDemoLamp.current);
  }, []);

  return (
    <div className="collection">
      <div className="collection__content">
        <motion.div className="collection__description" initial="hidden" whileInView="visible">
          <motion.p className="collection__text" custom={1} variants={textAnimation}>
            Collection of lighting is inspired by the geometric works of the great Suprematist
            artists Kissitzky and Kazimir Malevich.
          </motion.p>
          <motion.p className="collection__text" custom={2} variants={textAnimation}>
            Suprematism is a modernist movement in the art of the early twentieth century, focused
            on the basic geometric forms, such as circles, squares, lines and rectangles. The
            geometric structure of the lamps will always look like a small art objects in your
            house.
          </motion.p>
        </motion.div>

        <Card className="collection__card" />
      </div>
      <motion.div
        className={cn('collection__scene', { collection__scene_horizontal: !isHorizontal })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ...transition, duration: 2 }}>
        {theme === Theme.Light ? (
          <img src={sceneLightImg} alt="scena" className="collection__img" ref={imgBgRef} />
        ) : (
          <img src={sceneDarkImg} alt="scena" className="collection__img" ref={imgBgRef} />
        )}

        {lamp && (
          <div className="collection__lamp-container">
            <ImgComponent
              src={lamp.image}
              alt="lamp"
              className={cn('collection__lamp', `collection__lamp-${lamp.id}`)}
              ref={imgRef}
              handleLoad={imageLoaded}
            />
          </div>
        )}
        {!isHorizontal && <Choice className={cn({ card__choice_loading: !lamp })} />}
      </motion.div>
    </div>
  );
}

export default Collection;
