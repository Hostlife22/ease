import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface IImgComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt: string;
  handleLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const ImgComponent = forwardRef(
  (
    { src, alt, handleLoad, className }: IImgComponentProps,
    ref: ForwardedRef<HTMLImageElement>,
  ): JSX.Element => {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.img
          className={cn(className)}
          ref={ref}
          key={src}
          src={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          alt={alt}
          onLoad={handleLoad}
        />
      </AnimatePresence>
    );
  },
);

export default ImgComponent;
