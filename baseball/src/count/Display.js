import React, {useState} from 'react';
import Dashboard from './Dashboard'

const Display = () => {
    const [strikes, useStrikes] = useState(0)
    const [balls, useBalls] = useState(0)
    const [hits, useHits] = useState(0)

    const throwBall = (e) => {
        e.preventDefault();
        if (balls < 3 ) {
        useBalls(balls + 1)
        } else {
            useBalls(0)
            useStrikes(0)
        }
    }

    const throwStrike = (e) => {
        e.preventDefault();
        if (strikes < 2) {
            useStrikes(strikes + 1)
        } else {
            useBalls(0)
            useStrikes(0)
        }
    }

    const foulBall = e => {
        e.preventDefault();
        if(strikes < 2) {
            useStrikes(strikes + 1)
        } else{
            useStrikes(2)
        }
    }

    const hitBall = e => {
        e.preventDefault();
        useStrikes(0);
        useBalls(0);
        useHits(hits + 1);
    }
    
    const reset = e => {
        e.preventDefault();
        useStrikes(0);
        useBalls(0);
        useHits(0);
    }

    return (
        <div>
            <div>Strikes:{strikes}</div>
            <div>Balls:{balls}</div>
            <div>Hits:{hits}</div>
            <Dashboard 
                throwBall={throwBall}
                throwStrike={throwStrike}
                foulBall={foulBall}
                hitBall={hitBall}
             /> 
             <button onClick={reset}>Reset</button>  
        </div>    
    )
}

export default Display;