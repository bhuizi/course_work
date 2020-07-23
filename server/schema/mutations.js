const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const mongoose = require("mongoose");
const CommentType = require("./comment_type");
const Comment = mongoose.model("comment");
const User = mongoose.model("user");
const UserType = require("./user_type");

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, args){
          return User.findById(args.id).update({...args})
      }
    },
    updateComment: {
      type: CommentType,
      args: {
        id: { type: GraphQLID},
        text: { type: GraphQLString}
      },
      resolve(_, {id, text}){
        return Comment.findById(id).update({text})
      }
    }

  },
});

module.exports = mutations;