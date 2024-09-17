import React from "react";
import LazyLoad from "react-lazyload";

const MyLazyLoadedImage = ({ src, alt }) => {
  return (
    <LazyLoad height={50} offset={100}>
      {/* The height and offset props control when the image should start loading */}
      <img src={src} alt={alt} />
    </LazyLoad>
  );
};

export default MyLazyLoadedImage;
