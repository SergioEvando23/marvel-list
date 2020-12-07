import React from 'react';
import './DetailScreenImage.css';

const DetailScreenImage = ({name, urlImg, typeImage}) => {
    // console.log(urlImage+"."+typeImage)
    return (
        <div className="detail-screen-image">
            {name}
            <img src={urlImg+"."+typeImage} width="408" height="430" />
        </div>
    );
};

export default DetailScreenImage;