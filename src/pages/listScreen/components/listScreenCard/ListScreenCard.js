import React from 'react';
import './ListScreenCard.css';

const ListScreenCard = ({name, urlImg, typeImg}) => {
    return (
        <div className="list-screen-card">
          {name}
          <img src={urlImg+"."+typeImg} width="208" height="240" />
        </div>
    );
};

export default ListScreenCard;