import React from 'react';
import Cards from '../../components/card';
import NavBar from '../../components/navBarMovies'

export default function circle() {
  const progress: any = 80;
  return (
    <div className="percent">
      <NavBar />
      <Cards />
  </div>
  );
}
