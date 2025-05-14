
import React from 'react';
import bannerImg from '../../assets/banner.png';

function Banner() {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-auto"
        style={{ display: 'block' }}
      />
    </div>
  );
}

export default Banner;












