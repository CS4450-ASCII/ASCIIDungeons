import { port } from './config/environment';
import app from './app';
import { sequelize } from './database/models';

const start = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Database successfully connected');
    })
    .catch(err => {
      console.log(`Database connection error: ${err}`);
    });

  try {
    app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();
