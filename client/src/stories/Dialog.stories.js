import React from 'react';

import NewGameDialog from '../components/Pages/Create/Editor/Dialogs/NewGameDialog';
import SaveAsDialog from '../components/Pages/Create/Editor/Dialogs/SaveAsDialog';
import NewLevelDialog from '../components/Pages/Create/Editor/Dialogs/NewLevelDialog';
import OpenGameDialog from '../components/Pages/Create/Editor/Dialogs/OpenGameDialog';
import { dummyGameData } from './dummyData';

export default {
  title: 'Components / Dialogs'
};

export const NewGame = () => (
  <NewGameDialog
    {...{
      initiallyOpen: true
    }}
  />
);

export const SaveAs = () => (
  <SaveAsDialog
    {...{
      initiallyOpen: true
    }}
  />
);

export const NewLevel = () => (
  <NewLevelDialog
    {...{
      initiallyOpen: true
    }}
  />
);

export const OpenGame = () => (
  <OpenGameDialog
    {...{
      initiallyOpen: true,
      games: dummyGameData
    }}
  />
);
