import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  function handleInputChange(e) {
    dispatch(onChangeFilter(e.target.value));
  }

  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </LabelFilter>
  );
};

export default Filter;
