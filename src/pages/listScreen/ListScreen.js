import React from 'react';
import './ListScreen.css';
import ListScreenCard from './components/listScreenCard/ListScreenCard';

const ListScreen = props => {
    return (
        <div className="list-screen">
            ListScreens
            <ListScreenCard />
        </div>
    );
};

export default ListScreen;