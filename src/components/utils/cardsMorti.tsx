import React, { useEffect, useState } from 'react';
import { IMorti, IRes } from '../../types/i-morti';
import '../../styles/cards.css';
import MortiInfo from './mortiInfo';

function CardsMorti(props: { searchQuery: string }) {
  const [arrMorti, setArrMorti] = useState<IMorti[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalObject, setModalObject] = useState<IMorti>();
  function requestModal(content: IMorti) {
    setModalActive(true);
    setModalObject(content);
  }
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/` + props.searchQuery)
      .then((res) => res.json())
      .then((res: IRes) => res.results)
      .then(
        (result: IMorti[]) => {
          setIsLoaded(true);
          setArrMorti(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props.searchQuery]);
  if (error) {
    return <div>Error: error</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="cards">
        <div
          onClick={() => setModalActive(false)}
          style={{ display: modalActive ? 'flex' : 'none' }}
          className="modal"
        >
          <MortiInfo value={modalObject} />
        </div>
        {arrMorti.map((item) => (
          <div key={item.name} className="preview-frame">
            <img
              onClick={() => requestModal(item)}
              className="preview-photo"
              src={item.image}
            ></img>
          </div>
        ))}
      </div>
    );
  }
}
export default CardsMorti;
