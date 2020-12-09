import React, {useEffect, useState} from 'react';
import './ListScreen.css';
// import characters from '../../__mocks__/characters';
import ListScreenCard from './components/listScreenCard/ListScreenCard';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/button';
import axios from '../../core/axios.config';
// import {PUBLIC_KEY} from '../../core/constants';
import encrypt from '../../utils/encrypt';

const ListScreen = props => {
    const [characters, setCharacters] = useState({});

    useEffect(() => {
        axios.get(`characters?${encrypt()}`).then((response) => {
            setCharacters(response?.data)
        }).catch(console.error)
    }, []);

    const charactersInfo = characters?.data?.results?.map((item, index) =>{
    
        return (
            <div key={index}>
               <Link to="/detail" ><ListScreenCard name={item?.name} urlImg={item?.thumbnail?.path} typeImg={item?.thumbnail?.extension} /></Link> 
            </div>
        )
    });

    return (
        <div className="list-screen">
            <div className="list-screen__list-screen-buttons">
                <Button variant="outlined" color="primary" >Back List</Button>
                <Button variant="outlined" color="primary" >Next List</Button>
            </div>
            {charactersInfo}

        </div>
    );
};

export default ListScreen;