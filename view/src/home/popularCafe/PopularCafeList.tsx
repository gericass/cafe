import * as React from 'react';
import { Cafe } from '../../models/Cafe';

interface PopularCafeContentProps {
  cafeInfo: Cafe[]
}

class PopularCafeList extends React.Component<PopularCafeContentProps, {}> {

  setList = (): JSX.Element[] => {
    return this.props.cafeInfo.map((c) => {
      return (
        <li key={c.id}>
          <img src={c.images[0]}/>
          <div className='CafeListDescriptionContainer'>
            <h2 className='cafeListName'>{c.name}</h2>
            <p className='cafeListDescription'>{c.description}</p>
          </div>
        </li>
      );
    });
  };

  public render() {
    return (
      <ul className='popularCafeList'>
        {this.setList()}
      </ul>
    );
  }
}

export default PopularCafeList;