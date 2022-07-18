import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { Choice } from '..';
import { ILamp } from '../../features/lamps/lamps.interface';
import { selectLamp, selectLoading } from '../../features/lamps/lampsSlice';
import { useAppSelector, useMediaQuery } from '../../hooks';
import { hideElem, showElem } from '../../utils';
import './Card.scss';

interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Card({ className, ...props }: ICardProps) {
  const [lampPrev, setLampPrev] = useState<ILamp | null>(null);
  const isMobile = useMediaQuery('(max-width: 820px)');
  const imgRef = useRef<HTMLImageElement>(null);
  const lamp = useAppSelector(selectLamp);
  const isloading = useAppSelector(selectLoading);

  const transition = { type: 'tween', duration: 3 };

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
    <motion.div
      className={cn('card', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ...transition, duration: 1 }}>
      <div className="card__container">
        <motion.div
          className="card__shape"
          initial={{ left: '100px' }}
          whileInView={{ left: isMobile ? '-4px' : '-57.17px' }}
          transition={{ ...transition, type: 'tween' }}>
          {isloading && (
            <div className="card__spinner">
              <Watch height="200" width="200" color="#3d9090" ariaLabel="loading" />
            </div>
          )}
        </motion.div>

        {lamp && (
          <>
            <motion.div
              className="card__description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ ...transition, duration: 2 }}>
              <p className="card__text">
                <span>Material:</span> {lamp.material}
              </p>
              <p className="card__text">
                <span>Dimensions (cm):</span> H {lamp.height} x W {lamp.width} x D {lamp.width}
              </p>
              <p className="card__text">
                <span>Net Weight:</span> {lamp.weight} kg
              </p>
              <p className="card__text">
                <span>Electrification:</span>
                <br /> {lamp.electrification.split(',').join(' | ')}
              </p>
            </motion.div>
            <motion.div
              className={cn('card__wrap', { [`card__wrap-${lampPrev?.id}`]: !!lamp })}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ ...transition, duration: 2 }}>
              <img
                src={lampPrev?.image || lamp.image}
                alt=""
                className={cn('card__img')}
                ref={imgRef}
              />
            </motion.div>
          </>
        )}
      </div>
      <Choice className="card__choice" />
    </motion.div>
  );
}

export default Card;
