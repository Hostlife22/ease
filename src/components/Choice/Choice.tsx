import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Bars } from 'react-loader-spinner';
import { ILamp } from '../../features/lamps/lamps.interface';
import { selectLamp, selectLamps, selectLoading, setLamp } from '../../features/lamps/lampsSlice';
import { Theme } from '../../features/theme/theme.interface';
import { setTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useAppSelector, useMediaQuery } from '../../hooks';
import { nightIcon, sunIcon } from '../../images';
import './Choice.scss';

interface IChoiceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Choice({ className, ...props }: IChoiceProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLarge = useMediaQuery('(max-width: 1440px)');
  const lamps = useAppSelector(selectLamps);
  const lamp = useAppSelector(selectLamp);
  const isloading = useAppSelector(selectLoading);
  const transition = { type: 'tween', duration: 3 };

  const dispatch = useAppDispatch();

  const handleClick = (obj: ILamp) => {
    dispatch(setLamp(obj));

    if (!obj.isDarkMode) {
      dispatch(setTheme(Theme.Light));
    }
  };

  useEffect(() => {
    const hideSwitcher = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', hideSwitcher);

    return () => {
      window.addEventListener('scroll', hideSwitcher);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isLarge) {
      setIsOpen(false);
    }
  }, [isLarge]);

  return (
    <motion.div
      className={cn('choice', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ...transition, duration: 2, delay: 1 }}>
      <div className={cn('choice__container', { choice__container_open: isOpen })}>
        <div className="choice__lamps">
          {isloading &&
            Array.from({ length: 3 }).map((_, index) => (
              <div className="choice__spinner" key={index}>
                <Bars height="100" width="100" color="white" ariaLabel="loading" />
              </div>
            ))}
          {lamps.map((l) => (
            <div
              className={cn('choice__lamp-item', {
                'choice__lamp-item_selected': lamp?.id === l.id,
              })}
              key={l.id}
              onClick={() => handleClick(l)}>
              <span>
                <img src={l.image} alt={l.name} title={l.name} />
              </span>
            </div>
          ))}
        </div>
        <div className="choice__switcher">
          <button className="choice__btn" onClick={() => dispatch(setTheme(Theme.Light))}>
            <img src={sunIcon} alt="sun icon" />
          </button>
          <button
            className={cn('choice__btn', { choice__btn_disable: !lamp?.isDarkMode })}
            onClick={() => dispatch(setTheme(Theme.Dark))}>
            <img src={nightIcon} alt="night icon" />
          </button>
        </div>
        <div className="choice__transition" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <FaAngleRight /> : <FaAngleLeft />}
        </div>
      </div>
    </motion.div>
  );
}

export default Choice;
