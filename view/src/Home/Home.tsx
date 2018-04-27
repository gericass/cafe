import * as React from 'react';
import Header from '../common/Header';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <Header/>
        <div className="homeBodyContainer bodyContainer"/>
      </div>
    );
  }
}

export default Home;