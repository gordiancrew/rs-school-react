import '../../styles/search-bar.css';
import '../../styles/add-card.css';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
type SearchValues = {
  name: string;
};
function SearchBar(props: {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchQuery: string;
}) {
  const { register, handleSubmit } = useForm<SearchValues>();
  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    setCurrentValue(data?.name);
    props.setSearchQuery('?name=' + currentValue);
  };
  const [currentValue, setCurrentValue] = useState<string>(
    localStorage.value ? localStorage.value : ''
  );

  useEffect(() => {
    localStorage.value = currentValue;
  }, [currentValue]);
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="legend">Search for name:</legend>
          <input
            defaultValue={localStorage.value}
            {...register('name')}
            type="text"
            placeholder="input"
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </fieldset>

        <input type="submit" value="search" />
      </form>
    </div>
  );
}
export default SearchBar;
