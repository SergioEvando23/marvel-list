import React from 'react';
import './DetailScreen.css';
import DetailScreenImage from './components/detailScreenImage/DetailScreenImage';
import DetailScreenFilled from './components/detailScreenFilled/DetailScreenFilled';
import hero from '../../__mocks__/hero';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'

const DetailScreen = props => {
    const detailImage = hero?.data?.results?.map((item, index ) => {
        console.log(item)
        return (
            <div key={index}>
                  <DetailScreenImage 
                    name={item?.name} 
                    urlImg={item?.thumbnail?.path} 
                    typeImage={item?.thumbnail?.extension} 
                /> 
            </div>
        ) 
    });
    const detailHero = hero?.data?.results?.map((item, index ) => {
        return (
            <div key={index}>
                <DetailScreenFilled 
                    comics={item?.comics?.available} 
                    events={item?.events?.available} 
                    series={item?.series?.available}
                    stories={item?.stories?.available}
                /> 
            </div>
        ) 
    });

    return ( 
        <div className="detail-screen">
            {detailImage}
            <div className="detail-screen__detail-screen-info">  
                {detailHero}
            </div>
        </div>
    );
};

export default DetailScreen;