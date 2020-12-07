import React from 'react';
import './DetailScreen.css';
import DetailScreenImage from './components/detailScreenImage/DetailScreenImage';
import Hero from '../../__mocks__/hero';

const DetailScreen = props => {
    const detailHero = Hero?.data?.results?.map((item, index ) => {
        console.log(item?.id)
        return (
            <div>
                <DetailScreenImage name={item?.name} urlImg={item?.thumbnail?.path} typeImage={item?.thumbnail?.extension} /> 
            </div>
        )
        
    });

    return ( 
        <div className="detail-screen">
            DetailScreen
            {detailHero}
        </div>
    );
};

export default DetailScreen;