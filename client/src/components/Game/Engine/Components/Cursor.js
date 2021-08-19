import _ from 'lodash';
import { GameObject } from './GameObject';
import { Map } from './Map';

function objectHasValidDataTemplate(object) {
  try {
    return !_.isEmpty(JSON.parse(_.get(object, 'dataTemplate')));
  } catch {
    return false;
  }
}

/** A cursor that tracks the mouse position. */
export class Cursor extends GameObject {
  static gameObject = {
    object: { character: ' ', cColor: '#000000', bColor: '#FFFFFF' },
  };

  static eraseMode = false;

  /** Builds a Cursor. */
  constructor(cursorProps) {
    super();
    this.x = -1;
    this.y = -1;
    /** The selected character of the cursor. */
    this.character = ' ';
    /** Is background rendering enabled? */
    this.background = true;
    /** The character color hex value. */
    this.cColor = '#FFFFFF';
    /** The background color hex value. */
    this.bColor = '#000000';
    this.isTicking = true;
    this.MAP = null;
    this.cursorProps = cursorProps;
  }

  step(deltatime, input) {
    if (input.wasKeyPressed('e')) Cursor.eraseMode = true;
    if (input.wasKeyPressed('d')) Cursor.eraseMode = false;

    this.bColor = Cursor.eraseMode ? '#FF0000' : '#000000';
    this.character = Cursor.eraseMode
      ? ' '
      : Cursor.gameObject.object.character;

    if (!this.MAP) {
      this.MAP = this.GE.getObjectByType(Map);
      if (!this.MAP) return;
    }

    if (!input.MOUSE_ON_CANVAS) {
      this.x = -1;
      this.y = -1;
      return;
    }

    this.x = Math.floor(
      (input.MOUSE_POS.x / (this.GE.renderer.mainCanvas.width + 5)) *
        this.GE.renderer.gridX,
    );
    this.y = Math.floor(
      (input.MOUSE_POS.y / (this.GE.renderer.mainCanvas.height + 5)) *
        this.GE.renderer.gridY,
    );

    const validDataTemplate = objectHasValidDataTemplate(
      Cursor.gameObject.object,
    );

    if ((input.MOUSE_CLICK || input.MOUSE_DOWN) && Cursor.eraseMode) {
      this.MAP.clearSpace(this.x, this.y);
      return;
    }

    if (Cursor.gameObject.object.character === ' ') return;

    if ((input.MOUSE_CLICK || input.MOUSE_DOWN) && !validDataTemplate) {
      this.MAP.setSpace(this.x, this.y, Cursor.gameObject.object);
    }

    if (input.MOUSE_CLICK && validDataTemplate) {
      this.MAP.setSpace(this.x, this.y, {
        character: Cursor.gameObject.object.character,
      });
      _.invoke(
        this.cursorProps,
        'onLeftClick',
        Cursor.gameObject.object,
        this.x,
        this.y,
        this.MAP.setSpace,
        this.MAP.clearSpace,
      );
    }
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}
