import React, { createContext, useState } from 'react';

const initialState = {
  currentGame: undefined,
  currentLevel: undefined,
};

export const GameContext = createContext(initialState);

function GameProvider({ children }) {
  const [currentGame, setCurrentGame] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);

  return (
    <GameContext.Provider
      value={{
        currentGame,
        setCurrentGame,
        currentLevel,
        setCurrentLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
