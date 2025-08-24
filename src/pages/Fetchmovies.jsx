import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Fetchmovies = () => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setShows([]);
    
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`)
      .then(response => {
        if (!response.ok) throw new Error('Error fetching shows');
        return response.json();
      })
      .then(result => {
        setShows(result);
      })
      .catch(err => {
        setShows([{ error: err.message }]);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex flex-col justify-start items-center gap-10 p-10  bg-[#fff] min-h-screen'>
            <Header />
      
      <div>
        <input
          className='shadow shadow-blue-600 p-2 rounded-2xl animate-pulse   focus:outline-none focus:ring-2 text-center focus:ring-blue-600'
          type="text"
          placeholder="Search for TV shows"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className='m-5 p-5 font-bold hover:bg-[#fff] shadow-2xl bg-blue-200 rounded-2xl' onClick={handleSearch}>
          Search
        </button>
      </div>

      {shows.length === 0 && <div className='font-bold'> Type in a Show name.</div>}
      
      {shows.length > 0 && shows[0].error && (
        <div>Error: {shows[0].error}</div>
      )}
      
      {shows.length > 0 && !shows[0].error && (
        <div className='flex flex-wrap justify-center items-center'>
          {shows.map((item) => (
            <div className='flex flex-col w-[15em] justify-center p-1 font-bold items-center shadow-xl rounded-2xl shadow-blue-950 gap-4 m-4' key={item.show.id}>
              
              {item.show.image && (
                <img className='w-[100%] rounded-2xl' src={item.show.image.medium} alt={item.show.name} />  
              )}
              <h2>{item.show.name}</h2>
              <Link to="/details" state={{ show: item.show }} className='font-bold rounded-2xl p-5 bg-blue-100 animate-bounce hover:animate-pulse  shadow shadow-violet-950
              '>More Details</Link>
              <hr />

            </div>
          ))} 

        </div>
      )}

    </div>
  );
};

export default Fetchmovies;