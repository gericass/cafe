import * as React from 'react';
import { Requests } from '../../dao/Requests';
import { Cafe } from '../../models/Cafe';
import PopularCafeContent from './PopularCafeContent';

class PopularCafe extends React.Component {

  cafeContents: PopularCafeContent[];

  setContent = (cafes: Cafe[]) => {
    this.cafeContents = {};
    cafes.forEach((cafe) => {
      this.cafeContents.push(
        <PopularCafeContent cafeInfo={cafe}/>
      )
    })
  };

  componentWillMount() {
    const cafes: Cafe[] = Requests.getPopularCafe();
    this.setContent(cafes)
  };

  public render() {
    return (
      <div className='popularCafe'>
        <h2 className='popularCafeTitle'>
          <ul className='popularCafeList'>
            {this.cafeContents}
          </ul>
        </h2>
      </div>
    );
  }
}

export default PopularCafe;