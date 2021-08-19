import React, { createContext, useState } from 'react';

const initialState = {
  currentGame: undefined,
  currentLevel: undefined,
};

export const EditorContext = createContext(initialState);

function EditorProvider({ children }) {
  const [currentGame, setCurrentGame] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);

  return (
    <EditorContext.Provider
      value={{
        currentGame,
        setCurrentGame,
        currentLevel,
        setCurrentLevel,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export default EditorProvider;
