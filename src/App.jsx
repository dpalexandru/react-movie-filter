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


  const [selected, setSelected] = useState("")

  return (
    <>
      <h1>Lista dei film da vedere una volta nella vita</h1>

      {/* S E L E C T  G E N R E  */}
      <div className="container-select">
        <p >Segli un genere:</p>
        <select
          className='form-select mb-5'
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Tutti</option>
          <option value="azione">Azione</option>
          <option value="fantascienza">Fantascienza</option>
          <option value="thriller">Thriller</option>
          <option value="romantici">Romantici</option>
        </select>
      </div>
      {/* L I S T A  F I L M */}
      <p >Elenco film:</p>

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
