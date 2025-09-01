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
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [search, setSearch] = useState("");


  //usiamo use effect per aggiornare al cambio di selected
  useEffect(() => {
    if (!selected) {
      setFilteredMovies(movies);
    } else
      setFilteredMovies(movies.filter((m) => m.genre.toLocaleLowerCase() === selected.toLocaleLowerCase()))
  }, [selected])

  // usiamo use effect per aggiornare all'inserimento nella search
  useEffect(() => {
    let base;
    if (!selected) {
      base = movies;
    } else {
      base = movies.filter(
        (m) => m.genre.toLowerCase() === selected.toLowerCase()
      );
    }

    let result;
    if (!search) {
      result = base;
    } else {
      result = base.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredMovies(result);
  }, [search, selected]);

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
          <option value="romantico">Romantici</option>
        </select>
      </div>

      {/* C A M P O  S E A R C H  */}
      <p >Cerca per titolo:</p>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca per titolo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      {/* L I S T A  F I L M */}
      <p >Elenco film:</p>

      <ul className="list-group">
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className='list-group-item'
          >
            {movie.title} <br />
            <span className='text-muted small'> Genere : {movie.genre}</span>
          </li>
        ))}

      </ul>


      {/* A G G I U N G I  */}
      <form className="mt-3 aggiungi">
        <input
          type="text"
          className="form-control"
          placeholder="Aggiungi titolo"
          value={""}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="button" className="btn btn-primary">
          Aggiungi
        </button>
      </form>



    </>
  )
}

export default App;
