import React from 'react';
import classes from './Movie.module.css';
import './rating.css';

const Movie = (props) => {
    const IMG_API = "http://image.tmdb.org/t/p/w500";
    const defaultImg = 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=369&q=80';

    let spanClasses = ['rate'];
    if (props.rate >= 8) {
        spanClasses.push('green');
    } else if (props.rate > 6) {
        spanClasses.push('orange');
    } else {
        spanClasses.push('red');
    }

    return (
        <div className={classes.Card}>
            <img src={props.img ? IMG_API + props.img : defaultImg} alt={props.title}/>
            <div className={classes.Details}>
                <h3>{props.title}</h3>
                <span className={spanClasses.join(' ')}>{props.rate}</span>
            </div>

            <div className={classes.Info}>
                <h4>{props.title}</h4>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Movie;