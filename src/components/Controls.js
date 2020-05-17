import React, { memo } from 'react';

const Controls = ({ start, reset, pause, status }) => (
    <div className="controls">
        {!status && (
            <button onClick={start}>
                Start
            </button>
        )}

        {status === 'Finished' && (
            <button onClick={start} className="start">
                Restart
            </button>
        )}

        {(status === 'Paused' || status === 'Running') && (
            <div>
                <button onClick={reset}>
                Reset
                </button>
                
                <button onClick={pause}>
                {status === 'Paused' ? 'Resume' : 'Pause'}
                </button>
            
            </div>
        )}

    </div>)

export default memo(Controls)