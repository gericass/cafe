import * as React from 'react';
import { Cafe } from '../../models/Cafe';
import { RouterAction } from 'react-router-redux';
import PopularCafeContent from './PopularCafeContent';
import { DESCRIPTION_PATH } from '../../constants/Paths';

interface PopularCafeListProps {
  cafeInfo: Cafe[]
  push: (path: string) => RouterAction;
}

class PopularCafeList extends React.Component<PopularCafeListProps, {}> {

  setList = (): JSX.Element[] => {
    return this.props.cafeInfo.map((c) => {
      return (
        <PopularCafeContent
          cafe={c}
          key={c.id}
          onClick={
            () => {
              this.props.push(DESCRIPTION_PATH);
            }
          }
        />
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