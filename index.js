import { port } from './config/environment';
import app from './app';
import { sequelize, User } from './database/models';

const start = async () => {
  try {
    console.log('Synchronizing Sequelize with database...');
    await sequelize.sync();
    console.log('Sequelize is synchronized');

    console.log(`🚀  Starting GraphQL server...`);
    app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
};

start();
