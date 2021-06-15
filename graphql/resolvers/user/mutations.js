import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { accessTokenSecret } from '../../../config/environment';
import { User } from '../../../database/models';

/**************************************************************
 * References:
 * -https://www.howtographql.com/graphql-js/6-authentication/
 *
 **************************************************************/

const userMutations = {
  loginUser: async (obj, { user: { email, password } }, context, info) => {
    // find email/password combination
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User with email does not exist.');
    }

    const passwordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordValid) {
      throw new Error('Incorrect password.');
    }

    const token = jwt.sign({ userId: user.id }, accessTokenSecret);

    // if exists, return token
    return { user, token };
  },

  createUser: async (
    obj,
    { user: { email, password, displayName } },
    context,
    info
  ) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      throw new Error('User with email already exists.');
    }

    const user = await User.create({
      displayName,
      email,
      hashedPassword,
      salt
    });

    const token = jwt.sign({ userId: user.id }, accessTokenSecret);

    return { user, token };
  },

  updateUser: async (_, args) => {
    // update user
    // return newly updated user
  }
};

export default userMutations;
