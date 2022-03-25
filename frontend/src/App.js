import './App.css';
import React from 'react';
import SearchBox from "./components/Search";
import Profile from './components/Profile';
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
      <>
        <SearchBox onClick={this.handleSubmit}/>
        {!this.state.response ? null : <Profile summoner={this.state.response}/>}
      </>
    );
  }
}
 
export default App;
