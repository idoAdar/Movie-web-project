import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
        return (
            <div className={classes.Navbar}>
                <div className={classes.Logo}>
                    <span onClick={props.camera_clicked}><i className="fas fa-camera fa-3x"></i><p className={classes.Title}>IMDB Search Engine</p></span>
                </div>
                <div className={classes.search_container}>
                    <input type="text" value={props.search} placeholder="Search..." onChange={props.changed}/>
                    <button onClick={props.clicked}>Search</button>
                </div>
            </div>
        )
}

export default Navbar;