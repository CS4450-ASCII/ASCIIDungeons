import { Map } from "../Components/Map";
import { McGuffin } from "../Components/McGuffin";
import { Player } from "../Components/Player";
import { StairsDown } from "../Components/StairsDown";

export var Game = {
  title: "Proto",
  levelIndex: -1,
  nextLevel: function() {
    this.levelIndex++;
    return this.levels[this.levelIndex];
  },
  levels: [
    {width: 20, height: 30, objects: [
      new Map([
        [],
        [],
        [
          undefined,
          undefined,
          {
            character: '╔',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '╗',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
        ],
        [
          undefined,
          undefined,
          {
            character: '║',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '║',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
        ],
        [
          undefined,
          undefined,
          {
            character: '║',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '║',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
        ],
        [
          undefined,
          undefined,
          {
            character: '║',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '.',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '║',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
        ],
        [
          undefined,
          undefined,
          {
            character: '╚',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '#',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '═',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
          {
            character: '╝',
            bColor: '#000000',
            background: false,
            cColor: '#FFFFFF'
          },
        ],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '╔', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '╗', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, { character: '╚', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '╝', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
      ]),
      new Player(3, 4),
      new StairsDown(12,25)
    ]},
    {width: 15, height: 7, objects: [
      new Map([
        [],
        [undefined,{ character: '╔', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '╗', bColor: '#000000', background: false, cColor: '#FFFFFF'}, undefined, undefined, undefined, { character: '╔', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '╗', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,{ character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, undefined, undefined, undefined, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,{ character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '#', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,{ character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, undefined, undefined, undefined, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '.', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '║', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
        [undefined,{ character: '╚', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '╝', bColor: '#000000', background: false, cColor: '#FFFFFF'}, undefined, undefined, undefined, { character: '╚', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '═', bColor: '#000000', background: false, cColor: '#FFFFFF'}, { character: '╝', bColor: '#000000', background: false, cColor: '#FFFFFF'}],
      ]),
      new Player(3,3),
      new McGuffin(11,3)
    ]}
  ]
};