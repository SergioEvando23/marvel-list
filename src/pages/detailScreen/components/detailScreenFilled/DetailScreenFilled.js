import React from 'react';
import './DetailScreenFilled.css'

const DetailScreenFilled = ({comics, events, series, stories}) => {
    return (
        <div className="detail-screen-filled">
            <div className="detail-screen-filled__detail-screen-filled-title"> 
                 CHARACTER DETAILS
            </div>
            <div className="detail-screen-filled__detail-screen-filled-info"> 
                <p>COMICS: {comics} related comics</p>
                <p>EVENTS: {events} related events</p>
                <p>SERIES: {series} related series</p>
                <p>STORIES: {stories} related stories</p>
            </div>
        </div>
    );
};

export default DetailScreenFilled;