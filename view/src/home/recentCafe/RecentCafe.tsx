import * as React from 'react';
import { Cafe } from '../../models/Cafe';
import { RouterAction } from 'react-router-redux';
import { Requests } from '../../dao/Requests';

interface RecentCafeProps {
  push: (path: string) => RouterAction;
}

class RecentCafe extends React.Component<RecentCafeProps, {}> {

  cafes: Cafe[];

  componentWillMount() {
    // FIXME get userID from store
    this.cafes = Requests.getRecentCafe(1);
  };

  public render() {
    return (
      <div className="recentCafe"/>
    );
  };
}

export default RecentCafe;