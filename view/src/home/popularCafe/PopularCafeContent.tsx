import * as React from 'react';
import { Cafe } from '../../models/Cafe';

interface PopularCafeContentProps {
  cafe: Cafe;
  onClick: () => void;
}

class PopularCafeContent extends React.Component<PopularCafeContentProps, {}> {

  public render() {
    return (
      <li onClick={this.props.onClick}>
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