const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    movie_id: { type: GraphQLID },
    text: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

module.exports = CommentType;
