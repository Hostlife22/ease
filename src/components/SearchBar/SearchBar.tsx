import cn from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { transition } from '../../utils/animation';
import './SearchBar.scss';

interface ISearchBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: string;
  handleSearchKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBar({
  className,
  value,
  handleSearchKey,
  clearSearch,
  formSubmit,
}: ISearchBarProps) {
  return (
    <motion.div
      className={cn(className, 'search')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search By Category"
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </motion.div>
  );
}

export default SearchBar;
