import React from 'react';

function Search(props) {
    return ( 
        <div className="searchbox-container">
            <h1>StatChecked</h1>
            <form onSubmit={props.onClick}>
                <input id="username" type="text" name="username" placeholder="League username..."></input>
                <button type="submit">Search</button>
            </form>
        </div>
     );
}

export default Search;