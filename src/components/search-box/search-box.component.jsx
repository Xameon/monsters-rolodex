import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onSearchHandle }) => {
  return (
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onSearchHandle}
    />
  );
};

export default SearchBox;
