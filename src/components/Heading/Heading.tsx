import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import './Heading.scss';

export interface IHeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  text: string;
  span: string;
}
function Heading({ text, span, className, ...props }: IHeadingProps) {
  const transition = { type: 'tween', duration: 3 };
  return (
    <motion.h1
      className={cn(className, 'heading')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ...transition, duration: 1 }}>
      <span>{span}</span> {text}
    </motion.h1>
  );
}

export default Heading;
