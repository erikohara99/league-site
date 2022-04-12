import './App.css';
import React from 'react';
import SearchBox from "./components/Search";
import Profile from './components/Profile';
const axios = require("axios");

class App extends React.Component {

  state = {
    summoners: []
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let {summoners} = this.state;
    const name = document.getElementById("searchbox-input").value;
    const {data} = await axios.get(`http://localhost:3000/api/summoner/matches/${name}`);
    summoners.push(data);
    this.setState({summoners});
  }

  render() { 
    return(
      <>
        <div className="searchbox-container">
          <SearchBox onClick={this.handleSubmit}/>
        </div>
        <div className="profile-container">
          {this.state.summoners.length === 0 ? null : this.state.summoners.map(summoner => {
            return <Profile summoner={summoner} key={summoner.puuid} />
          })}
        </div>
      </>
    );
  }
}
 
export default App;
