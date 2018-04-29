import * as React from 'react';
import { Cafe } from '../../models/Cafe';

interface PopularCafeContentProps {
  cafeInfo: Cafe
}

class PopularCafeContent extends React.Component<PopularCafeContentProps, {}> {

  public render() {
    return (
      <li className='popularCafeContent'>
        <img src={this.props.cafeInfo.images[0]}/>
        <div className={this.props.cafeInfo.name}/>
      </li>
    );
  }
}

export default PopularCafeContent;