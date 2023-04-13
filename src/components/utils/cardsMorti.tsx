import React, { useEffect, useState } from 'react';
import { IMorti, IRes } from '../../types/i-morti';
import '../../styles/cards.css';
import MortiInfo from './mortiInfo';
import { useSearchUsersQuery } from '../../store/api/morti.api';

function CardsMorti(props: { searchQuery: string }) {
  const { isLoading, isError, data } = useSearchUsersQuery('m');

  // const [resApi, setResApi] = useState<IRes>();
  // const [error, setError] = useState<Error | null>(null);
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalObject, setModalObject] = useState<IMorti>();
  function requestModal(content: IMorti) {
    setModalActive(true);
    setModalObject(content);
  }
  // useEffect(() => {
  //   fetch(`https://rickandmortyapi.com/api/character/?name=` + localStorage.value)
  //     .then((res) => res.json())
  //     .then(
  //       (result: IRes) => {
  //         setIsLoaded(true);
  //         setResApi(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, [props.searchQuery]);
  // if (isError) {
  //   return <div>Error: error</div>;
  // } else if (!isLoading) {
  //   return <h2>Loading...</h2>;
  //   // } else if (data?.error) {
  //   //   return <h2>No results for these parameters</h2>;
  // } else {
  return (
    <div className="cards">
      <div style={{ display: modalActive ? 'flex' : 'none' }} className="modal">
        <div className="fone" onClick={() => setModalActive(false)}></div>
        <MortiInfo value={modalObject} setModalActive={setModalActive} />
      </div>
      {data?.results.map((item) => (
        <div key={item.name} className="preview-frame">
          <img onClick={() => requestModal(item)} className="preview-photo" src={item.image}></img>
        </div>
      ))}
    </div>
  );
}
// }
export default CardsMorti;
