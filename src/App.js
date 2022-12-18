import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg';
//8017b93b
const API_URL = "http://www.omdbapi.com?apikey=8017b93b&";

const movie1 = {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);
  return (
    <div classname = 'app'>
        <h1>MovieLand</h1>
        <div className ='search'>
            <input 
            placeholder='Search for movies'
            value = "Batman"
            onChange={() => {}}
            />
            <img
                src={SearchIcon}
                alt='search'
                onClick={() => {}}
            />
        </div>
        <div className='container'>
            <div classname='movie'>
                <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
                </div>
                
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
};

export default App;
