import React, { useEffect, useState } from 'react';
import '../../styles/search.css';

function Search() {
  const [currentValue, setCurrentValue] = useState<string>(
    localStorage.value ? localStorage.value : ''
  );

  useEffect(() => {
    localStorage.value = currentValue;
  }, [currentValue]);
  return (
    <div className="search">
      <form>
        <input
          defaultValue={localStorage.value}
          id="inp"
          type="text"
          placeholder="input"
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <button type="button"></button>
      </form>
    </div>
  );
}

export default Search;
