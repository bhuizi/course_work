const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;

const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: {
      street: {type: GraphQLString},
      city: {type: GraphQLString},
      state: {type: GraphQLString},
      zipcode: {type: GraphQLString},
    }
});

const TheaterType = new GraphQLObjectType({
    name: 'TheaterType',
    fields: () => ({
        theaterId: {type: GraphQLInt},
        location: { type: AddressType},
    })
})

module.exports = TheaterType;