const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt, GraphQLNonNull } = graphql;
const CommentType = require('./comment_type');
const TheaterType = require('./theater_type');
const UserType = require('./user_type');
const Comment = mongoose.model('comment');
const User = mongoose.model('user');
const Theater = mongoose.model('theater');


const RootQuery = new GraphQLObjectType({   
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { id }) {
        return User.findById(id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({})
      },
    },
    theater: {
        type: TheaterType,
        args: {id: { type: new GraphQLNonNull(GraphQLID)}},
        resolve(_, {id}){
            return Theater.findById(id)
        }
    },
    theaters: {
      type: new GraphQLList(TheaterType),
      resolve(){
        return Theater.find({});
      }
    },
    comment: {
      type: CommentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID)}},
      resolve(_, {id}){
        return Comment.findById(id)
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(){
        return Comment.find({});
      }
    }
  }),
});

module.exports = RootQuery;
