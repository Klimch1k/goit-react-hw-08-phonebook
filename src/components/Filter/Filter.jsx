import { useDispatch } from 'react-redux';
import { onFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(onFilter(e.target.value));
  };
  return (
    <>
      <input
        className={css.input}
        onChange={onChangeFilter}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
