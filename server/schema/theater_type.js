const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLFloat} = graphql;

const GeoType = new GraphQLObjectType({
    name: 'Geo',
    fields: () => ({
      type: {
        type: GraphQLString
      },
      coordinates: {
        type: new GraphQLList(GraphQLFloat)
      },
    }),
  })

const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: {
        street1: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zipcode: {type: GraphQLString},
    }
})

const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: {
        address: {type: AddressType},
        geo: { type: GeoType}
    }
});

const TheaterType = new GraphQLObjectType({
    name: 'TheaterType',
    fields: () => ({
        theaterId: {type: GraphQLInt},
        location: { type: LocationType},
    })
})

module.exports = TheaterType;