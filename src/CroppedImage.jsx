import React from 'react';

const CroppedImage = ({ src, alt }) => {
  const styles = {
    overflow: 'hidden',
    position: 'relative',
    // height: '80vh'
    // width: '100%',
    height: '20%',
  };

  const imgStyles = {
    // position: 'absolute',
    // top: '20%',
    // transform: 'translateY(-50%)',
    marginTop: '-25%',
    objectFit: 'cover',
    height: '80vh'
    // width: '100%',
  };

  return (
    <div style={styles}>
      <img src={src} style={imgStyles} />
    </div>
  );
};

export default CroppedImage;