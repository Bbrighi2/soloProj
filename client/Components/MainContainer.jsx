import React, { Component } from 'react';
import CardContainer from './CardContainer';
// import { connect } from 'react-redux';

/*TODO:
add second input text field to search teams
second input text field should  only work when teams field is filled out
add eventListeners to load data from api

*/

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamNum: 0,
      playerName: '',
      submitted: false,
    };

    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangePlayer = this.onChangePlayer.bind(this);
    this.onBtnSubmit = this.onBtnSubmit.bind(this);
  }

  onChangeTeam(e) {
    e.preventDefault();
    const teamNameVal = e.target.value;
    this.setState({
      teamNum: teamNameVal,
      playerName: this.state.playerName,
      submitted: false,
    });
    // console.log(teamName);
  }
  onChangePlayer(e) {
    e.preventDefault();
    const playerNameVal = e.target.value;
    this.setState({
      teamNum: this.state.teamNum,
      playerName: playerNameVal,
      submitted: false,
    });
    // console.log(teamName);
  }
  onBtnSubmit(e) {
    e.preventDefault();
    this.setState({
      teamNum: this.state.teamNum,
      playerName: this.state.playerName,
      submitted: true,
    });
  }

  render() {
    return (
      <div id="main-container">
        <h1 id="main-heading">NBA Stat Card Collection</h1>
        <hr />
        <form id="card-form" onSubmit={this.onBtnSubmit}>
          <select id="team-select" name="select" onChange={this.onChangeTeam}>
            <option value="0">Select Team:</option>
            <option value="1">Atlanta Hawks</option>
            <option value="2">Boston Celtics</option>
            <option value="5">Charlotte Hornets</option>
            <option value="6">Chicago Bulls</option>
            <option value="7">Cleveland Cavaliers</option>
            <option value="8">Dallas Mavericks</option>
            <option value="9">Denver Nuggets</option>
            <option value="10">Detroit Pistons</option>
            <option value="11">Golden State Warriors</option>
            <option value="14">Houston Rockets</option>
            <option value="15">Indiana Pacers</option>
            <option value="16">Los Angeles Clippers</option>
            <option value="17">Los Angeles Lakers</option>
            <option value="19">Memphis Grizzlies</option>
            <option value="20">Miami Heat</option>
            <option value="21">Milwaukee Bucks</option>
            <option value="22">Minnesota Timberwolves</option>
            <option value="23">New Orleans Pelicans</option>
            <option value="24">New York Knicks</option>
            <option value="25">Oklahoma City Thunder</option>
            <option value="26">Orlando Magic</option>
            <option value="27">Philadelphia 76ers</option>
            <option value="28">Phoenix Suns</option>
            <option value="29">Portland Trail Blazers</option>
            <option value="30">Sacramento Kings</option>
            <option value="31">San Antonio Spurs</option>
            <option value="38">Toronto Raptors</option>
            <option value="40">Utah Jazz</option>
            <option value="41">Washington Wizards</option>
          </select>

          <input
            className="search-bar"
            name="player"
            type="text"
            placeholder="Last Name"
            onChange={this.onChangePlayer}
          />
          <input id="submit-btn" type="submit" value="Enter" />
        </form>
        {this.state.submitted === true ? (
          <CardContainer
            teamNum={this.state.teamNum}
            playerName={this.state.playerName}
          />
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default MainContainer;

/*<input
className="search-bar"
name="team"
type="text"
placeholder="Team Name"
onChange={onChangeTeam}
/>
*/

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
