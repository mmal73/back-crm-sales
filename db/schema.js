const { gql } = require('apollo-server');

const typeDefs = gql`
    type User{
        id: ID
        name: String
        lastname: String
        email: String
        created_at: String
    }
    type Token{
        token: String
    }
    type Product{
        id: ID
        name: String!
        stock: Int!
        price: Float!
        created_at: String
    }
    input UserInput{
        name: String
        lastname: String
        email: String
        password: String
    }
    input authenticateInput{
        email: String!
        password: String!
    }
    input ProductInput{
        name: String!
        stock: Int!
        price: Float!
    }
    type Query{
        getUser(token: String!): User
    }
    type Mutation{
        # Users
        newUser(input: UserInput): User
        authenticateUser(input: authenticateInput): Token

        # Products
        newProduct(input: ProductInput): Product
    }
`;

module.exports = typeDefs;