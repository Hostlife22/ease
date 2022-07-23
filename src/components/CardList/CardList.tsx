import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ILamp } from '../../features/lamps/lamps.interface';
import './CardList.scss';

export interface IImgComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  lamp: ILamp;
}

function CardList({ className, lamp, ...props }: IImgComponentProps) {
  return (
    <motion.ul
      className="card__list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 2 }}>
      <li className="card__item">
        <span>Material:</span> {lamp.material}
      </li>
      <li className="card__item">
        <span>Dimensions (cm):</span> H {lamp.height} x W {lamp.width} x D {lamp.width}
      </li>
      <li className="card__item">
        <span>Net Weight:</span> {lamp.weight} kg
      </li>
      <li className="card__item">
        <span>Electrification:</span>
        <br /> {lamp.electrification.split(',').join(' | ')}
      </li>
    </motion.ul>
  );
}

export default CardList;
