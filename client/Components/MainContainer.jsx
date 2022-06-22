import React from 'react';
import CardContainer from './CardContainer';
// import CardContainer from './CardContainer';
// import { connect } from 'react-redux';

/*TODO:
add second input text field to search teams
second input text field should  only work when teams field is filled out
add eventListeners to load data from api

*/

const MainContainer = (props) => (
  <div id="main-container">
    <h1 id="main-heading">NBA Stat Card Collection</h1>
    <hr />
    <div id="card-form">
      <form type="submit">
        <input id="search-bar" type="text" placeholder="Player Name"></input>
        <input id="submit-btn" type="button" value="Enter"></input>
      </form>
    </div>
    <CardContainer />
  </div>
);

export default MainContainer;
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
