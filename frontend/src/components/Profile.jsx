import React from 'react';

function Profile(props) {

    const {profileIconId, name, summonerLevel} = props.summoner.profile;
    const {wins, losses, winrate, tier, rank} = props.summoner.matches_ranked;
    let stylesLevel = {};

    if(summonerLevel < 25) stylesLevel = {backgroundColor: "black"};
    else if(summonerLevel < 50) stylesLevel = {backgroundColor: "brown"};
    else if(summonerLevel < 75) stylesLevel = {backgroundColor: "yellow"};
    else if(summonerLevel < 100) stylesLevel = {backgroundColor: "orange"};
    else if(summonerLevel < 125) stylesLevel = {backgroundColor: "green"};
    else if(summonerLevel < 150) stylesLevel = {backgroundColor: "blue"};
    else if(summonerLevel < 175) stylesLevel = {backgroundColor: "purple"};
    else if(summonerLevel < 200) stylesLevel = {backgroundColor: "red"};
    else stylesLevel = {animation: "high-level 5s infinite"};

    return (
        <div className="profile">
            <img src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${profileIconId}.png`} alt="profile icon for user"></img>
            <h1 className="profile-level" style={stylesLevel}>{summonerLevel}</h1>
            <h1 className="profile-name">{name}</h1>
            <div className="stats-ranked">
                <h1 className="winrate">{winrate}%</h1>
                <div>
                    <h2>{wins} Wins</h2>
                    <h2>{losses} Losses</h2>
                </div>
            </div>
        </div>
     );
}

export default Profile;