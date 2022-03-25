import './App.css';
import React from 'react';
import SearchBox from "./components/Search";

class App extends React.Component {

  state = {
    response: null
  }

  render() { 
    return(
      <SearchBox/>
    );
  }
}
 
export default App;
