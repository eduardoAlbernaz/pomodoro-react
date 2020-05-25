import React, { memo } from 'react';

const Controls = ({ start, reset, pause, status }) => (
    <div className="controls">
        {!status && (
            <button onClick={start} className="start">
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
                <button onClick={reset} className="reset">
                Reset
                </button>
                
                <button onClick={pause}
                className={status === 'Paused' ? 'resume' : 'pause'}>
                {status === 'Paused' ? 'Resume' : 'Pause'}
                </button>
            
            </div>
        )}

    </div>)

export default memo(Controls)