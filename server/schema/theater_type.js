const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;

const AddressDataType = new GraphQLObjectType({
    name: 'AddressData',
    fields: {
        street1: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zipcode: {type: GraphQLString},
    }
})

const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: {
        address: {type: AddressDataType}
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