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
  loginUser: async (
    parent,
    { params: { email, password } },
    { currentUser },
    info,
  ) => {
    // find email/password combination
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User with email does not exist.');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new Error('Incorrect password.');
    }

    const token = jwt.sign({ userId: user.id }, accessTokenSecret);

    // if exists, return token
    return { user, token };
  },

  createUser: async (
    parent,
    { params: { email, password, displayName } },
    { currentUser },
    info,
  ) => {
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      throw new Error('User with email already exists.');
    }

    const user = await User.create({
      email,
      password,
      displayName,
    });

    const token = jwt.sign({ userId: user.id }, accessTokenSecret);

    return { user, token };
  },

  updateUser: async (
    obj,
    { params: { id, ...userParams } },
    { currentUser },
    info,
  ) => {
    const user = await User.findByPk(id);

    await user.update(userParams);

    return user;
  },
};

export default userMutations;
