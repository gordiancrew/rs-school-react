import React, { useState } from 'react';
import { IMorti } from '../../types/i-morti';
import '../../styles/cards.css';
import '../../styles/search-bar.css';
import MortiInfo from './mortiInfo';
import { useSearchUsersQuery } from '../../store/api/morti.api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
type SearchValues = {
  name: string;
};
interface res {
  mortiapi: {
    subscriptions: string;
    mutations: string;
    queries: object;
    provided: string;
  };
}
function CardsMorti() {
  const resul = useSelector((state: res) =>
    Object.keys(state.mortiapi.queries)[Object.keys(state.mortiapi.queries).length - 1]
      ? Object.keys(state.mortiapi.queries)[Object.keys(state.mortiapi.queries).length - 1].split(
          '"'
        )[1]
      : ''
  );
  const [currentValue, setCurrentValue] = useState(resul);
  const { isLoading, isError, data } = useSearchUsersQuery(currentValue);

  const [modalActive, setModalActive] = useState(false);
  const [modalObject, setModalObject] = useState<IMorti>();
  const { register, handleSubmit } = useForm<SearchValues>();

  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    setCurrentValue(data?.name);
  };
  function requestModal(content: IMorti) {
    setModalActive(true);
    setModalObject(content);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="legend">Search for name:</legend>
          <input
            defaultValue={currentValue}
            {...register('name')}
            type="text"
            placeholder="input"
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </fieldset>

        <input type="submit" value="search" />
      </form>
      <div>{isError && <h1>No results</h1>}</div>
      <div>{isLoading && <h1>Load....</h1>}</div>
      <div style={{ display: modalActive ? 'flex' : 'none' }} className="modal">
        <div className="fone" onClick={() => setModalActive(false)}></div>
        <MortiInfo value={modalObject} setModalActive={setModalActive} />
      </div>
      <div className="cards">
        {!isError
          ? data?.results.map((item) => (
              <div key={item.id} className="preview-frame">
                <img
                  onClick={() => requestModal(item)}
                  className="preview-photo"
                  src={item.image}
                ></img>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}
// }
export default CardsMorti;
