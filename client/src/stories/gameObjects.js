const wallAttributes = {
  baseType: 0,
  gameEngineLayer: 0,
  isPassable: false,
  dataTemplate: null,
};

const stairAttributes = {
  basetype: 0,
  gameEngineLayer: 0,
  isPassable: true,
  dataTemplate: {
    goToLevelId: null,
  },
};

export function getObjectSeeds() {
  const thickWalls = [
    ['╔', 'Top Left'],
    ['╦', 'Top Center'],
    ['╗', 'Top Right'],
    ['╠', 'Middle Left'],
    ['╬', 'Middle Center'],
    ['╣', 'Middle Right'],
    ['╚', 'Bottom Left'],
    ['╩', 'Bottom Middle'],
    ['╝', 'Bottom Right'],
    ['║', 'Vertical'],
    ['═', 'Horizontal'],
  ].map(([character, subtitle]) => ({
    title: `Thick Wall - ${subtitle}`,
    character,
    ...wallAttributes,
  }));

  const thinWalls = [
    ['┌', 'Top Left'],
    ['┬', 'Top Center'],
    ['┐', 'Top Right'],
    ['├', 'Middle Left'],
    ['┼', 'Middle Center'],
    ['┤', 'Middle Right'],
    ['└', 'Bottom Left'],
    ['┴', 'Bottom Middle'],
    ['┘', 'Bottom Right'],
    ['|', 'Vertical'],
    ['─', 'Horizontal'],
    ['-', 'Horizontal Short'],
  ].map(([character, subtitle]) => ({
    title: `Thin Wall - ${subtitle}`,
    character,
    ...wallAttributes,
  }));

  const otherNonPassables = [
    ['█', 'Tall Block'],
    ['▀', 'Block - Top'],
    ['■', 'Block - Middle'],
    ['▄', 'Block - Bottom'],
  ].map(([character, title]) => ({
    title,
    character,
    ...wallAttributes,
  }));

  const stairs = [
    ['<', 'Up'],
    ['>', 'Down'],
  ].map(([character, subtitle]) => ({
    title: `Stairs - ${subtitle}`,
    character,
  }));

  const player = {
    basetype: 0,
    gameEngineLayer: 0,
    title: 'Player Spawn Point',
    character: '@',
    isPassable: true,
  };

  return [
    ...thickWalls,
    ...thinWalls,
    ...otherNonPassables,
    ...stairs,
    player,
  ].map((object, index) => ({ ...object, id: index }));
}
