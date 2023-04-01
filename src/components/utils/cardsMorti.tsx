import React, { useEffect, useState } from 'react';
import '../../styles/cards.css';
interface IMorti {
  name: string;
  image: string;
  species: string;
  url: string;
  gender: string;
}
interface IRes {
  results: IMorti[];
}
function CardsMorti() {
  const [arrMorti, setArrMorti] = useState<IMorti[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
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
  }, []);
  if (error) {
    return <div>Error: error</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="cards">
        {arrMorti.map((item) => (
          <div key={item.name} className="card">
            <div className="card-photo-frame">
              <img className="card-photo" src={item.image}></img>
              <div className="card-gender">
                {/* <img className="card-img" src={item.url}></img> */}
                {item.gender}
              </div>
            </div>
            <div className="card-info">
              {item.name}
              <React.Fragment>
                <br />
              </React.Fragment>
              {item.species}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default CardsMorti;
