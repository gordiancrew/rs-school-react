import React from 'react';
import { useSearchUsersQuery } from '../store/api/morti.api';
import Header from './utils/header';

function AboutUs() {
  const { isLoading, isError, data } = useSearchUsersQuery('m');
  return (
    <div>
      <Header />
      <h1>This is application about football!</h1>
      <h2>hh{JSON.stringify(data)}</h2>
    </div>
  );
}
export default AboutUs;
