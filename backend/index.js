import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb://localhost/test');

const Workshop = mongoose.model('Workshop', { type: String, name: String, img: String, description: String });

const User = mongoose.model('User', { username: String, password: String, token: {tokenhex: String, date: String }});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Workshop, User } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use(express.static('public'))

app.listen(PORT);
