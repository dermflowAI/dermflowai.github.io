import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const styles = {
    iphone1024: {
        width: '1024px',
        height: '1024px',
        backgroundColor: '#C6DEF1'
    }
}

function IPhoneLogos () {
    const divRef = useRef(null);

    const handleDownload = () => {
        html2canvas(divRef.current).then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg');
          const link = document.createElement('a');
          link.download = 'my-div-image.jpg';
          link.href = imgData;
          link.click();
        });
      };
    
    return (    <div>
        <div ref={divRef} style={styles.iphone1024}>
          {/* Your content here */}
        </div>
        <button onClick={handleDownload}>Download Image</button>
      </div>)
}

export default IPhoneLogos;

