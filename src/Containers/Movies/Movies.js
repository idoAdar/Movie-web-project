import React, { useState, useEffect } from 'react';
import classes from './Movies.module.css';
import Movie from '../../Components/Movie/Movie';
import Navbar from '../../Components/Navbar/Navbar';
import Spinner from '../../Components/Spinner/Spinner';
import Aux from '../../hoc/_Aux';

const Movies = (props) => {
    const SET_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=d9dc46e2b38f8641eb273674c087041b&language=en-US&page=1";
    const [movies, setMovies] = useState([]);
    const [searchState, setSearchState] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [cameraState, setCameraState] = useState(false);

    useEffect(() => {
        fetch(SET_API)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setMovies(data.results);
            setCameraState(false);
        })
    }, [cameraState])

    const reloadPageFunc = () => {
        setCameraState(true);
        setErrorState(false);
    }

    const inputChangeHandler = (e) => {
        setSearchState(e.target.value);
    }

    const inputClickedHandler = (e) => {
        e.preventDefault();
        setCameraState(false);
        setErrorState(false);
        if (searchState === '' || searchState === undefined) {
            setErrorState(true);
            setMovies([]);
        }

        if (searchState) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=d9dc46e2b38f8641eb273674c087041b&language=en-US&query=${searchState}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.results.length === 0) {
                    setErrorState(true);
                }
                setMovies(data.results);
                setSearchState('');
            })
        }
    }

    let error = null;
    if (errorState) {
        error = <Spinner />
    }

    return (
    <Aux>
        <Navbar camera_clicked={reloadPageFunc} search={searchState} clicked={inputClickedHandler} changed={inputChangeHandler}/>
        {error}
        <div className={classes.List}>
            {movies.map(movie => {
                return <Movie 
                img={movie.poster_path}
                title={movie.title}
                rate={movie.vote_average}
                info={movie.overview}
                key={movie.id}/>
            })}
        </div>
    </Aux>
    )
}

export default Movies;