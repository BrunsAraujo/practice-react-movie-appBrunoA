
import React, { useState} from 'react';

    const genreData = {
        Action : ['Rambo', 'Chucky', 'Jaws'],
        Drama : ['Out of Africa', 'Lions', "The Great Escape"],
        Comedy : [' Airplane', 'Gremilins', '9 to 5'],
    };
    
        export default function MovieSelector() {
    const [ selectGenre, setSelectedGenre] = useState('');
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState('');
    const [movies, setMovies] = useState([]);

    const handleFetchMovies = () => {
        if (!selectGenre) {
            setError('Please select a genre before fetching movies.');
             return;
        }

        setError('');
        setIsLoading(true);
       
       setTimeout(() =>{
            setMovies(genreData[selectGenre] || []);
            setIsLoading(false);
        }, 1500);    
 };
 
    return (
        <div className='movie-selector'>
        <h2> Select a Movie Genre</h2>

        <select
        value = {selectGenre}
        onChange = {(e) => setSelectedGenre(e.target.value)}>

        <option value="">--ChooseGenre--</option>
        {Object.keys(genreData).map((genre) => (
            <option key ={genre} value={genre}>{genre}</option>
        ))}
        </select>
        
        <button onClick={handleFetchMovies}>Fetch Movies </button>


         {isLoading && <p> Loading Movies...</p>}
        {!isLoading && movies.length > 0 && (
            <ul>
                {movies.map((movie, index) => (
                    <li key= {index}> {movie}</li>
                ))}
            </ul>
        )}
            </div>
        );
        };
   
