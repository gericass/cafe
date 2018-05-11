import * as React from 'react';
import { Requests } from '../../dao/Requests';
import { Cafe } from '../../models/Cafe';
import PopularCafeList from './PopularCafeList';
import { RouterAction } from 'react-router-redux';

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
          <PopularCafeList cafeInfo={this.cafes} push={this.props.push}/>
        </h2>
      </div>
    );
  }
}

export default PopularCafe;