const { buildSchema } = require("graphql");

module.exports.toDoSchema = buildSchema(`
  type Query {
    getAllTodos: [Todos!]!
  }
  type Todos {
    id: ID!
    title: String!
    status: String!
    createdAt: String!
  }
  input ToDoInput {
    title: String!
  }
  type Mutation {
    addNewTodo(todo: ToDoInput!):Todos!
    finishToDo(id:ID!): Todos!
    deleteToDo(id:ID!): Boolean!
  }
`);
