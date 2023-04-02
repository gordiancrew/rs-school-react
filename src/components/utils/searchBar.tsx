import '../../styles/search-bar.css';
import '../../styles/add-card.css';
import React, { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
type SearchValues = {
  name: string;
  gender: string;
  status: string;
};
function SearchBar(props: {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchQuery: string;
}) {
  const { register, handleSubmit } = useForm<SearchValues>();
  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    alert(JSON.stringify(data));
    props.setSearchQuery(
      '?name=' + data?.name + '&status=' + data?.status + '&gender=' + data?.gender
    );
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="legend">Search for name:</legend>
          <input {...register('name')} type="text" placeholder="input" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Search status:</legend>
          <select {...register('status')}>
            <option selected disabled value="">
              select status
            </option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknow">Unknow</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Search gender:</legend>
          <select {...register('gender')}>
            <option selected disabled value="">
              select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </fieldset>

        <input type="submit" value="search" />
      </form>
    </div>
  );
}
export default SearchBar;
