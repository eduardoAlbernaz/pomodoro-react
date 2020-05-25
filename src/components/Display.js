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
            // background
            // backgroundPadding={6}
            styles={buildStyles({
            // backgroundColor: "white",
                textColor: "#F2F0F3",
                pathColor: "#F2F0F3",
                trailColor: "#C17070",
              })}>
            </CircularProgressbar>
        </div>
    )
}

export default TimeDisplay