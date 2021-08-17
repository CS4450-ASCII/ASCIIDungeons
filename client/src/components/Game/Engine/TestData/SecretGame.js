import { Map } from "../Components/Map";
import { Player } from "../Components/Player";
import { StairsDown } from "../Components/StairsDown";

export var Game = {
  title: "The Secret Wizard Dungeon",
  levelIndex: -1,
  nextLevel: function () {
    this.levelIndex++;
    return this.levels[this.levelIndex];
  },
  hasNextLevel: function () {
    return !!(this.levels[this.levelIndex + 1]);
  },
  levels: [
    {
      width: 20, height: 30, objects: [
        new Map({ gridItems: [] }),
        new Player(3, 4),
        new StairsDown(12, 25)
      ]
    }
  ]
};