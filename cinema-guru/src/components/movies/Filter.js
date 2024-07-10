import './movies.css';
import PropTypes from 'prop-types';
import { searchIcon } from '../../assets/fontIcons';

// COMPONENT IMPORTS
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const filterOptions = [
  {name: 'latest', id: '001'},
  {name: 'oldest', id: '002'},
  {name: 'highest rated', id: '003'},
  {name: 'lowest rated', id: '004'},
];

function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
  const tags = ["action", "drama", "comedy", "biography", "romance", "thriller", "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"];

  const handleMinYear = (value) => {
    setMinYear(Number(value));
  };

  const handleMaxYear = (value) => {
    setMaxYear(Number(value));
  };

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <div className='filter-div'>
      <div className='filter-inputs'>
        <SearchBar title={title} setTitle={setTitle} icon={searchIcon} />
        <Input label='Min Date:' type='number' className='min-date-input' value={minYear} setValue={handleMinYear} />
        <Input label='Max Date:' type='number' className='max-date-input' value={maxYear} setValue={handleMaxYear} />
        <SelectInput label='Sort:' options={filterOptions} className='sort-options' value={sort} setValue={handleSort} />
      </div>
      <div className='filter-tags'>
        {tags.map(tag => (
          <Tag key={tag} genre={tag} filter={true} genres={genres} setGenres={setGenres} />
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  minYear: PropTypes.number.isRequired,
  setMinYear: PropTypes.func.isRequired,
  maxYear: PropTypes.number.isRequired,
  setMaxYear: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired
};

export default Filter;