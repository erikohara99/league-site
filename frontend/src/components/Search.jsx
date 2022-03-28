import React from 'react';
import LandingVideo from "../video/landing.mp4";

function Search(props) {
    return ( 
        <div className="searchbox">
            <div id="searchbox-name">
                <h1>StatChecked</h1>
                <div>
                    <h2>All your stats.</h2>
                    <h2>All your answers.</h2>
                </div>
            </div>
            <form onSubmit={props.onClick}>
                <input id="searchbox-input" type="text" name="username" placeholder="League username..."></input>
                <button id="searchbox-button"type="submit">Search</button>
            </form>
        </div>
     );
}

export default Search;