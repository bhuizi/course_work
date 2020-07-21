const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLNonNull } = graphql;
const UserType = require('./user_type');
const TheaterType = require('./theater_type');
const User = mongoose.model('user');
const Theater = mongoose.model('theater');

const RootQuery = new GraphQLObjectType({   
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      },
    },
    theater: {
        type: TheaterType,
        args: {id: { type: new GraphQLNonNull(GraphQLID)}},
        resolve(parentValue, {id}){
            return Theater.findById(id)
        }
    }
  }),
});

module.exports = RootQuery;
