import * as React from 'react';
import Header from '../common/Header';
import PopularCafe from './popularCafe/PopularCafe';
import RecentCafe from './recentCafe/RecentCafe';
import { push, RouterAction } from 'react-router-redux';
import { connect, Dispatch } from 'react-redux';

interface HomeProps {
  push: (path: string) => RouterAction;
}

class Home extends React.Component<HomeProps, {}> {
  public render() {
    return (
      <div className="home">
        <Header/>
        <div className="homeBodyContainer bodyContainer">
          <PopularCafe push={this.props.push}/>
          <RecentCafe push={this.props.push}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    push: (path: string) => dispatch(push(path)),
  };
};

export default connect(null, mapDispatchToProps)(Home);