import * as React from 'react';
import { Requests } from '../../dao/Requests';
import { Cafe } from '../../models/Cafe';
import PopularCafeList from './PopularCafeList';
import { push, RouterAction } from 'react-router-redux';
import { connect, Dispatch } from 'react-redux';

interface PopularCafeProps {
  push: (path: string) => RouterAction;
}

class PopularCafe extends React.Component<PopularCafeProps, {}> {

  cafes: Cafe[];

  componentWillMount() {
    this.cafes = Requests.getPopularCafe();
  };

  public render() {
    return (
      <div className='popularCafe'>
        <h2 className='popularCafeTitle'>
          <PopularCafeList cafeInfo={this.cafes}/>
        </h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    push: (path: string) => dispatch(push(path)),
  };
};

export default connect(null, mapDispatchToProps)(PopularCafe);