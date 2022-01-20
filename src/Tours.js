import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours}) => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
      </div>
      <div className='underline'>

      </div>
      <div>
        {tours.map(tour =>{
          return <Tour key={tour.id} {...tour} removeTours={removeTours}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
