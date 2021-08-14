import { Map } from '../Components/Map';
import { McGuffin } from '../Components/McGuffin';
import { Player } from '../Components/Player';
import { StairsDown } from '../Components/StairsDown';

/**
 * Builds a functioning game level from database output.
 * @param {array} level - The level array returned by the database.
 * @returns - The play mode game objects.
 */
// level.mapData (stringified array)
// JSON.parse(mapData) => [{ character, x, y, data }]
export function translateDBLevelToObjects(level) {
  const parsedMapData = parseMapData(level.mapData);
  let gridItems = [];
  let objects = [];

  for (const object of parsedMapData) {
    switch (object.character) {
      case '@':
        objects.push(new Player(object.x, object.y));
        break;
      case '>':
        objects.push(new StairsDown(object.x, object.y));
        break;
      case '§':
        objects.push(new McGuffin(object.x, object.y));
        break;
      default:
        gridItems.push(object);
        break;
    }
  }

  return {
    width: level.width,
    height: level.height,
    objects: [new Map({ gridItems }), ...objects],
  };
}

/**
 * Parse the provided map data into an array of level objects.
 *
 * @param {string} mapData Stringified array of level objects.
 * @returns Array of objects
 */
export function parseMapData(mapData) {
  let gridItems;

  // [{ character: '@', x: 1, y: 2, data: null }];

  try {
    gridItems = JSON.parse(mapData) || [];
  } catch {
    gridItems = [];
  }

  return gridItems;
}
