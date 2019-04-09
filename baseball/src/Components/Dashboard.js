import React from 'react';

const Dashboard = ({throwBall, throwStrike, foulBall, hitBall}) => {
  
    return (
        <div>
        <button onClick={throwBall}>Throw Ball</button>
        <button onClick={throwStrike}>Throw Strike</button>
        <button onClick={foulBall}>Foul Ball</button>
        <button onClick={hitBall}>HIT</button>
        </div>
    )
}

export default Dashboard;