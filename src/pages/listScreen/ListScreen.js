import React from 'react';
import './ListScreen.css';
import characters from '../../__mocks__/characters'
import ListScreenCard from './components/listScreenCard/ListScreenCard';

const ListScreen = props => {
    const charactersInfo = characters?.data?.results.map((item, index) =>{
        return (
            <div>
                <ListScreenCard name={item?.name} urlImg={item?.thumbnail?.path} typeImg={item?.thumbnail?.extension} />
            </div>
        )
    });

    return (
        <div className="list-screen">
            {charactersInfo}
        </div>
    );
};

export default ListScreen;