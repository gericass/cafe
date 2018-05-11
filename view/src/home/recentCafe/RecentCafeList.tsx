import * as React from 'react';
import { Cafe } from '../../models/Cafe';

interface RecentCafeListProps {
  cafeInfo: Cafe[]
}

class RecentCafeList extends React.Component<RecentCafeListProps, {}> {

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
      <ul className='recentCafeList'>
        {this.setList()}
      </ul>
    );
  };
}

export default RecentCafeList;