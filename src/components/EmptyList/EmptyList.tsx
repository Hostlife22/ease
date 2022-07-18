import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { emptyGif } from '../../images';
import './EmptyList.scss';

interface IEmptyListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function EmptyList({ className, ...props }: IEmptyListProps) {
  return (
    <motion.div
      className={cn(className, 'empty-list')}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}>
      <img src={emptyGif} alt="emty list" />
    </motion.div>
  );
}

export default EmptyList;
