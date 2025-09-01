import { useState, useEffect } from 'react'


// D A T A 

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  return (
    <>
      <h1>Lista dei film da vedere una volta nella vita</h1>
      <ul className="list-group">
        {movies.map((movie, index) => (
          <li
            key={index}
            className='list-group-item'
          >
            {movie.title} <br />
            <span className='text-muted small'> Genere : {movie.genre}</span>
          </li>
        ))}

      </ul>


    </>
  )
}

export default App
