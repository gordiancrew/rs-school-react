import React from 'react';
import { useSelector } from 'react-redux';

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
  const resul = useSelector((state: res) => state);
  return (
    <div>
      <Header />
      <h1>This is application about Rick and Morty!</h1>
      <h2>{JSON.stringify(resul)}</h2>
    </div>
  );
}
export default AboutUs;
