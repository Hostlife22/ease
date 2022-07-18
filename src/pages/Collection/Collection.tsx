import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../../components';
import { ILamp } from '../../features/lamps/lamps.interface';
import { selectLamp } from '../../features/lamps/lampsSlice';
import { Theme } from '../../features/theme/theme.interface';
import { selectTeme } from '../../features/theme/themeSlice';
import { useAppSelector } from '../../hooks';
import { hideElem, showElem } from '../../utils';
import './Collection.scss';

function Collection() {
  const [lampPrev, setLampPrev] = useState<ILamp | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const theme = useAppSelector(selectTeme);
  const lamp = useAppSelector(selectLamp);

  const transition = { type: 'tween', duration: 3 };
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.3, delay: custom * 1 },
    }),
  };

  useEffect(() => {
    if (lamp?.image && imgRef.current) {
      hideElem(imgRef.current, 0.1);

      setTimeout(() => {
        setLampPrev(lamp);
        imgRef.current && showElem(imgRef.current, 0.1);
      }, 200);
    }
  }, [lamp?.image]);

  return (
    <div className="collection">
      <div className="collection__content">
        <motion.div
          className="collection__description"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}>
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
        className="collection__scene"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ...transition, duration: 2 }}>
        <div className={cn('collection__scene-wrap', { dark: theme === Theme.Dark })}>
          {lamp && (
            <div
              className={cn('collection__lamp', {
                [`collection__lamp-${lampPrev?.id}`]: !!lamp,
              })}>
              <img src={lampPrev?.image || lamp.image} alt="lamp" ref={imgRef} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Collection;
