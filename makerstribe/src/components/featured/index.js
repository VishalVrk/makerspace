import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';
import Typed from 'react-typed';

const Featured = ()=> {
  return (
    <div style={{position:'relative'}}>
    <Carrousel/>
      <div className="artist_name">
            <div className="wrapper" >
                    <Typed 
                    strings={['Angel hack',"",'Elastic search',""]} 
                    typeSpeed={100} 
                    backSpeed={100}
                    loop/>
            </div>
      </div>
      <Countdown/>
    </div>
  )
}

export default Featured
