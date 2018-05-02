import * as React from 'react';
import Header from '../common/Header';
import PopularCafe from './popularCafe/PopularCafe';
import RecentCafe from './recentCafe/RecentCafe';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <Header/>
        <div className="homeBodyContainer bodyContainer">
          <PopularCafe/>
          <RecentCafe/>
        </div>
      </div>
    );
  }
}

export default Home;