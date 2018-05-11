import * as React from 'react';
import { Cafe } from '../../models/Cafe';
import { RouterAction } from 'react-router-redux';
import PopularCafeContent from './PopularCafeContent';

interface PopularCafeListProps {
  cafeInfo: Cafe[]
  push: (path: string) => RouterAction;
}

class PopularCafeList extends React.Component<PopularCafeListProps, {}> {

  setList = (): JSX.Element[] => {
    return this.props.cafeInfo.map((c) => {
      return (
        <PopularCafeContent cafe={c} push={this.props.push}/>
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