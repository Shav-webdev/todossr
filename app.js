import express from 'express'
import path from 'path'
import template from './src/template'
import ssr from './src/server'
import {db} from "./src/server/db/db";


const graphqlHTTP = require("express-graphql");
const resolver = require("../ssr/src/server/graphql/resolver");
const morgan = require("morgan");
const { toDoSchema } = require("../ssr/src/server/graphql/schema");
const app = express();

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

app.use(morgan("dev"));

app.use(
    "/graphql",
    graphqlHTTP({
      schema: toDoSchema,
      rootValue: resolver,
      graphiql: true,
    })
);

// hide powered by express
app.disable('x-powered-by');

const PORT = process.env.PORT || 3000;

// start the server
const server = app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`);
});

db(server);

let initialState = {
  isFetching: false,
  todos: []
};

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = ssr(initialState);
  const response = template("Todo", preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response)
});
