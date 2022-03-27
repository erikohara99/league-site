import React from 'react';

function Search(props) {
    return ( 
        <div className="searchbox">
            <h1>StatChecked</h1>
            <form onSubmit={props.onClick}>
                <input id="searchbox-input" type="text" name="username" placeholder="League username..."></input>
                <button id="searchbox-button"type="submit">Search</button>
            </form>
        </div>
     );
}

export default Search;