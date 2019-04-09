import React, {useState} from 'react';

const Display = () => {
    const [strikes, useStrikes] = useState(0)
    const [balls, useBalls] = useState(0)
    return (
        <div>
            <div>Strikes:{strikes}</div>
            <div>Balls:{balls}</div>

        </div>    
    )
}

export default Display;