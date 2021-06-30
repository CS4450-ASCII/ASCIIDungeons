import { Color } from '../../../database/models';

/**************************************************************
 * References:
 * -https://www.howtographql.com/graphql-js/6-authentication/
 *
 **************************************************************/

const colorMutations = {
  createColor: async (
    obj,
    { color: { currentColor, hexValue } },
    context,
    info
  ) => {
    const color = await Color.create({
      currentColor,
      hexValue
    });
    return color;
  },

  updateColor: async (_, args) => {
    // update color
    // return newly updated color
  }
};

export default colorMutations;
