import express from 'express';
import path from 'path';
import graphqlServer from './graphql';

const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));

graphqlServer.applyMiddleware({
  app
});

/* send requests to the React app */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

export default app;
