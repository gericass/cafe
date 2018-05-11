import * as React from 'react';
import { Cafe } from '../../models/Cafe';
import { RouterAction } from 'react-router-redux';
import { DESCRIPTION_PATH } from '../../constants/Paths';

interface PopularCafeContentProps {
  cafe: Cafe;
  push: (path: string) => RouterAction;
}

class PopularCafeContent extends React.Component<PopularCafeContentProps, {}> {

  public render() {
    return (
      <li onClick={this.props.push(DESCRIPTION_PATH)}>
        <img src={this.props.cafe.images[0]}/>
        <div className='CafeListDescriptionContainer'>
          <h2 className='cafeListName'>{this.props.cafe.name}</h2>
          <p className='cafeListDescription'>{this.props.cafe.description}</p>
        </div>
      </li>
    );
  }
}

export default PopularCafeContent;