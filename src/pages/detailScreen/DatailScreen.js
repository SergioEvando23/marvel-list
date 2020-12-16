import React, {useEffect, useState} from 'react';
import './DetailScreen.css';
import DetailScreenImage from './components/detailScreenImage/DetailScreenImage';
import DetailScreenFilled from './components/detailScreenFilled/DetailScreenFilled';
import axios from '../../core/axios.config';
import encrypt from '../../utils/encrypt';
import { useHistory } from 'react-router-dom';
// import hero from '../../__mocks__/hero';


const DetailScreen = props => {
    const history = useHistory();
    const [hero, setHero] = useState({});

    useEffect(() => {
        const search = history?.location?.search
        const parsedSearch = search.replace("?url=", "" )
        axios.get(`characters/${parsedSearch}?${encrypt()}`).then((response) => {
            setHero(response?.data)
        }).catch(console.error)
    }, []);

    const detailImage = hero?.data?.results?.map((item, index ) => {
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