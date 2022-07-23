import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CardList, Choice, ImgComponent } from '..';
import { selectHorizontal } from '../../features/horizontal/horizontalSlice';
import { selectLamp } from '../../features/lamps/lampsSlice';
import { useAppSelector } from '../../hooks';
import { transition } from '../../utils/animation';
import './Card.scss';

interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Card({ className }: ICardProps) {
  const lamp = useAppSelector(selectLamp);
  const isHorizontal = useAppSelector(selectHorizontal);

  return (
    <motion.div
      className={cn('card', className, { card_horizontal: !isHorizontal })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ...transition, duration: 1 }}>
      {lamp && (
        <>
          <motion.div
            className="card__description"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={transition}>
            <CardList lamp={lamp} />
          </motion.div>
          <ImgComponent src={lamp.image} alt="" className={cn('card__img')} />
        </>
      )}
      {isHorizontal && <Choice className={cn('card__choice', { card__choice_loading: !lamp })} />}
    </motion.div>
  );
}

export default Card;
