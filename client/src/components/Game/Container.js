import React from 'react';

function Container(properties) {
  return (
    <div id="gameContainer" style={{width: "95%",height: "300px",position: "relative"}}>
    <canvas id="gameCanvas" style={{border: "5px solid white",position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}></canvas>
    </div>
  );
}

export default Container;