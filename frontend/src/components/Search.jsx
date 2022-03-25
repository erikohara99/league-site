import React from 'react';

function Search(props) {
    return ( 
        <div className="searchbox-container">
            <h1>StatChecked</h1>
            <form>
                <input type="text" name="username" placeholder="League username..."></input>
                <button type="submit" onSubmit={props.onSubmit}>Search</button>
            </form>
        </div>
     );
}

export default Search;