import './App.css';
import React from 'react';
import SearchBox from "./components/Search";
const axios = require("axios");

class App extends React.Component {

  state = {
    response: null
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const {data} = await axios.get(`http://localhost:3000/api/summoner/${name}`);
    this.setState({response: data});
  }

  render() { 
    return(
      <div className="content">
        <SearchBox onClick={this.handleSubmit}/>
      </div>
    );
  }
}
 
export default App;
