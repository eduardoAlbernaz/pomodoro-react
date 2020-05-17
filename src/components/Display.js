import React from 'react';
import { formatTime } from '../utils';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const TimeDisplay = ({ time, status, progress }) => {
    return (
        <div className='timerContainer'>
            <CircularProgressbar 
            className='progressCircular'
            value={progress}
            maxValue={100}
            text={`${formatTime(time)}`}
            strokeWidth={2.5}
            background
            // backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "white",
                textColor: "#568259",
                pathColor: "#568259",
                trailColor: "#d9e6e1",
              })}>
            </CircularProgressbar>
        </div>
    )
}

export default TimeDisplay