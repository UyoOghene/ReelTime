import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

function Details() {
  const location = useLocation();
  const show = location.state?.show;

  if (!show) {
    return <div>No show data available</div>;
  }

  return (
    <div className=' flex flex-col justify-center items-center gap-3 m-5'>
            <Header />
      <div className="card border-4 border-blue-800 rounded-2xl p-5 flex flex-col justify-center items-center gap-3 m-5">
      <h2 className='text-fuchsia-700 font-extrabold text-2xl '>{show.name}</h2>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Language: {show.language}</p>
      <p>Status: {show.status}</p>
        <div className='flex flex-col justify-center items-center gap-3 m-5'>
          <h3 className='font-bold'>Summary:</h3>
          <div > {show.summary } </div>
        </div>
      
      {show.image && (
        <img className='rounded-2xl w-[20em]  shadow-lg shadow-blue-950' src={show.image.medium} alt={show.name} />
      )}
      </div>
    </div>
  );
}

export default Details;