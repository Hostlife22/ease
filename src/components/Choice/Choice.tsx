import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Bars } from 'react-loader-spinner';
import { selectHorizontal } from '../../features/horizontal/horizontalSlice';
import { ILamp } from '../../features/lamps/lamps.interface';
import { selectLamp, selectLamps, selectLoading, setLamp } from '../../features/lamps/lampsSlice';
import { Theme } from '../../features/theme/theme.interface';
import { setTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { transition } from '../../utils/animation';
import './Choice.scss';

interface IChoiceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Choice({ className }: IChoiceProps) {
  const lamps = useAppSelector(selectLamps);
  const lamp = useAppSelector(selectLamp);
  const isloading = useAppSelector(selectLoading);
  const isHorizontal = useAppSelector(selectHorizontal);

  const dispatch = useAppDispatch();

  const handleClick = (obj: ILamp) => {
    dispatch(setLamp(obj));

    if (!obj.isDarkMode) {
      dispatch(setTheme(Theme.Light));
    }
  };

  return (
    <motion.div
      className={cn('choice', className, { choice_horizontal: !isHorizontal })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ...transition, duration: isHorizontal ? 2 : 0 }}>
      <div className="choice__container">
        {isloading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Bars
              height="90%"
              width="90%"
              color="white"
              ariaLabel="loading"
              wrapperClass="choice__loading"
              key={index}
            />
          ))}
        {lamps.map((l) => (
          <div
            className={cn('choice__lamp-item', {
              'choice__lamp-item_selected': lamp?.id === l.id,
            })}
            key={l.id}
            onClick={() => handleClick(l)}>
            <img src={l.image} alt={l.name} title={l.name} />
          </div>
        ))}
      </div>
      <div className="choice__switcher">
        <div className="choice__btn" onClick={() => dispatch(setTheme(Theme.Light))} />
        <div
          className={cn('choice__btn', { choice__btn_disable: !lamp?.isDarkMode })}
          onClick={() => dispatch(setTheme(Theme.Dark))}
        />
      </div>
    </motion.div>
  );
}

export default Choice;
