import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchUsersQuery } from '../store/api/morti.api';
import Header from './utils/header';
interface res {
  mortiapi: {
    subscriptions: string;
    mutations: string;
    queries: object;
    provided: string;
  };
}

function AboutUs() {
  const resul = useSelector(
    (state: res) =>
      Object.keys(state.mortiapi.queries)[Object.keys(state.mortiapi.queries).length - 1].split(
        '"'
      )[1]
  );
  return (
    <div>
      <Header />
      <h1>This is application about football!</h1>
      <h2>{resul}</h2>
    </div>
  );
}
export default AboutUs;
