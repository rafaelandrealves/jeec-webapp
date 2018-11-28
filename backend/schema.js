export default `

type Workshop {
  id: String!
  type: String!
  name: String!
  img: String!
  description: String!
}

type Token {
  tokenhex: String!
  date: String!
}

type User {
  id: String!
  username: String!
  password: String!
  token: Token!
}

type Query {
  allWorkshops: [Workshop!]!
  getAllUsers: [User!]!
  nukeTokens: String!
  nukeUsers: String!
}

type Mutation {
  createWorkshop(type: String!, name: String!, img: String!, description: String!, token: String!, username: String!): Workshop!
  createUser(username: String!, password: String!): User!
  getToken(username: String!, password:String!): Token!
}

`;
